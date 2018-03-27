import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/forms/src/facade/async';

@Component({
    selector: 'upvote',
    templateUrl: 'app/events/event-details/upvote.component.html',
    styleUrls: ['app/event/event-details/upvote.component.css']
})

export class UpvoteComponent {
    @Input() count: number
    @Input() voted: boolean
    @Output() vote = new EventEmitter(); 
   
    onClick(){
        this.vote.emit({});
    }
}