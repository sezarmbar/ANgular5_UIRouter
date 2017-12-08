import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class PeopleService {
    constructor(public http : Http) {
        console.log('PeopleService constructor')

    }

    getAllPeople() {
        return this
            .http
            .get('data/people.json')
            .map(resp => resp.json())
            .toPromise();
    }

    getPerson(id) {
        function personMatchesParam(person) {
            return person.id === id;
        }

        return this
            .getAllPeople()
            .then(people => people.find(personMatchesParam));
    }
}