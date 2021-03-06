import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles:[`
    em {float:right; color:red; padding-left:10px;}
    .error input {backgroup-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999}
  `]
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup
  private firstName:FormControl
  private lastName:FormControl

  constructor(private authService:AuthService, 
              private router:Router, 
              @Inject(TOASTR_TOKEN) private toastr: Toastr){
  }
  ngOnInit(){
    this.firstName = new FormControl(this.authService.currentUser.firstName,
        [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.authService.currentUser.lastName,Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName : this.lastName
    })
  }   
  saveProfile(formValues){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);   
      //this.toastr.success("Profile saved!") 
      this.router.navigate(['events'])
     }
  }
  cancel(){
    this.router.navigate(['events'])
  }
  validatefirstName(){
    return this.firstName.valid || this.firstName.untouched 
  }
  validatelastName(){
    return this.lastName.valid || this.lastName.untouched 
  }
}