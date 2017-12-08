import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Component} from '@angular/core';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UIRouterModule} from "@uirouter/angular";


import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { AboutComponent } from './components/about/about.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/person/person.component';
import {PeopleService} from "./shared/services/people";
import {uiRouterConfigFn} from "./config/router.config";
import {helloState, aboutState, peopleState, personState} from "./states";

let INITIAL_STATES =  [ helloState, aboutState, peopleState, personState ];
let INITIAL_COMPONENTS =  [ AppComponent, HelloComponent, AboutComponent, PeopleComponent, PersonComponent ];

@NgModule({
  declarations: INITIAL_COMPONENTS,
  imports: [
    BrowserModule,
    HttpModule,
    UIRouterModule.forRoot({ 
      states: INITIAL_STATES,
      useHash: true,
      config: uiRouterConfigFn
    })
  ],
  providers: [
    { provide: PeopleService, useClass: PeopleService },    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
