import { Component, Input } from "@angular/core";
import { IEvent } from "./shared/event.model";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase }}</h2>
        <div>Date: {{event?.date | date:'shortDate'}}</div>
        <div [ngClass]="getClassTimeClass(event?.time)" 
            [ngSwitch]="event?.time">Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">Early start</span>
            <span *ngSwitchCase="'10:00 am'">Late start</span>
            <span *ngSwitchDefault>Normal start</span>
        </div>
        <div>Price: {{ event?.price |currency:'USD':true}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">OnlineURL: {{event?.onlineUrl}}</div>
    </div>
    `,
    styles: [`
        .green {color: #003300 !important; }
        .red {color: red !important; }
        .bold { font-weight: bold;}
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event:IEvent

    getClassTimeClass(time){
     if(time == '8:00 am')
        return ['green','bold']
    if(time == '10:00 am')
       return ['red','bold']        
     return []
    }

}