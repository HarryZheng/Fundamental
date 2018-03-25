import { Component, OnInit } from "@angular/core";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { ISession } from "..";

@Component({
    templateUrl: '/app/events/event-details/create-session.component.html',
    styles:[`
    em {float:right; color:red; padding-left:10px;}
    .error input {backgroup-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999}
  `]
})
export class createSessionComponent implements OnInit{
    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    ngOnInit(){
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])
       
        this.newSessionForm = new FormGroup({
            name : this.name,
            presenter : this.presenter,
            duration : this.duration,
            level : this.level,
            abstract : this.abstract
        })
    }
    saveSession(formValues){
        console.log(formValues)
    }
}