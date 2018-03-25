import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { createSessionComponent, EventListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, Error404Component, EventService, EventRouteActivator, EventListResolver } from './events';
import { ToastrService } from './common';
import { AuthService } from './user';

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
        createSessionComponent,
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