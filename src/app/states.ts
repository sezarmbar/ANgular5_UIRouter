import {HelloComponent} from "./components/hello/hello.component";
import {AboutComponent} from "./components/about/about.component";
import {PeopleComponent} from "./components/people/people.component";
import {PersonComponent} from "./components/person/person.component";
import {PeopleService} from "./shared/services/people";
import {Transition} from "@uirouter/angular";

/** States */

export const helloState = { name: 'hello', url: '/hello',  component: HelloComponent }; 

export const aboutState = { name: 'about', url: '/about',  component: AboutComponent };

export const peopleState = { 
  name: 'people',
  url: '/people',
  component: PeopleComponent,
  resolve: [
    { 
      token: 'people',
      deps: [PeopleService], 
      resolveFn: (peopelService) => peopelService.getAllPeople()
    }
  ]
};

export const personState = {
  name: 'person',
  url: '/people/:personId',
  component: PersonComponent,
  resolve: [
    { 
      token: 'person', 
      deps: [Transition, PeopleService],
      resolveFn: (trans, peopelService) => peopelService.getPerson(trans.params().personId)
    }
  ]
};
