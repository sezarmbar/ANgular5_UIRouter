import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class PeopleService {
  // Plunker embeds time out. So fetch and cache the data when the app loads
  // Continue to return observable.
  cache = null;
  
  constructor( public http: Http) {
    console.log('PeopleService constructor')
    
  }
  
  getAllPeople() {
    return this.cache = this.cache || this.http.get('assets/data/people.json')
        .map(resp =>  resp.json())
        .toPromise();
  }
 
  getPerson(id) {
    function personMatchesParam(person) {
      return person.id === id;
    }
    
    return this.getAllPeople()
        .then(people => people.find(personMatchesParam));
  }
}