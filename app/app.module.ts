import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
<<<<<<< HEAD
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes} from './routes'
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './events/erros/404-component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';
import { SessionListComponent } from './events';

=======
import { EventsAppComponent } from './events-app.component';
import { createSessionComponent, EventListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, Error404Component, EventService, EventRouteActivator, EventListResolver } from './events';
import { ToastrService } from './common';
import { AuthService } from './user';
>>>>>>> 7675c83acf6d2478b6feb169b67fb18c65d2516c

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
<<<<<<< HEAD
        SessionListComponent,
=======
        createSessionComponent,
>>>>>>> 7675c83acf6d2478b6feb169b67fb18c65d2516c
        Error404Component
    ],
    providers: [[
        EventService, 
        ToastrService, 
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolver,
        AuthService
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