import { Routes } from "@angular/router";

import {
    EventDetailsComponent,
    EventListComponent,
    CreateEventComponent,
    createSessionComponent,
    EventRouteActivator,
    EventListResolver,
    Error404Component
} from './events/index'

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventListComponent, resolve: { events: EventListResolver}},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: 'events/session/new', component: createSessionComponent},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]
