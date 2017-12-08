import {UIRouter} from "@uirouter/angular";
import {StateTree} from "@uirouter/visualizer";
import {Injector, Injectable} from "@angular/core";
import {PeopleService} from '../shared/services/people'

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  const peopleService = injector.get(PeopleService);
  
  // Plunker embeds can time out.  
  // Pre-load the people list at startup.
  peopleService.getAllPeople();
  
  // If no URL matches, go to the `hello` state by default
  router.urlService.rules.otherwise({ state: 'hello' });
  
  // Use ui-router-visualizer to show the states as a tree
  StateTree.create(router, document.getElementById('statetree'), { width: 200, height: 100 });
}