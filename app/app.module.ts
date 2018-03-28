import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { Error404Component } from './events/erros/404-component';
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pip';
import { JQUERY_TOKEN } from './common/jQuery.service';
import { SimpleModalComponent } from './common/simpleModal.component';
import { ModalTriggerDirective } from './common/modalTrigger.directive';
import { VoterService } from './events/shared/voter.service';
import { UpvoteComponent } from './events/event-details/upvote.component';

declare let toastr: Toastr
declare let jQuery: Object

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        Error404Component,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective,
        DurationPipe,
        UpvoteComponent
    ],
    providers: [[
        EventService, 
        EventRouteActivator,
        { provide: TOASTR_TOKEN, useValue: toastr},
        { provide: JQUERY_TOKEN, useValue: jQuery},  
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
        EventListResolver,
        AuthService,
        VoterService
    ]],
    bootstrap: [[EventsAppComponent]]
})

export class AppModule{
}

function checkDirtyState(component:CreateEventComponent){
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')

    return true
}