import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from ".";

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles:[`
    em {float:right; color:red; padding-left:10px;}
    .error input {backgroup-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999}
  `]
})
export class CreateEventComponent{
    isDirty:boolean = false
    constructor(private router: Router, private eventService: EventService){
    }
    cancel(){
        this.router.navigate(['/events'])
    }
    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.router.navigate(['/events'])
    }
}