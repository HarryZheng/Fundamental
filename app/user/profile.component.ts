import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'app/user/profile.component.html'
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup

  ngOnInit(){
    let firstName = new FormControl()
    let lastName = new FormControl()
    let profileForm = new FormGroup({
      firstName: firstName,
      lastName : lastName
    })
  }   
}