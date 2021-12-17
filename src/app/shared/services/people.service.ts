import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any>{
    let peopleArray = [
      {
        firstName: 'Pedro',
        lastName: 'Prado',
        age: 26
      },
      {
        firstName: 'Bia',
        lastName: 'Jota',
        age: 28
      },
      {
        firstName: 'José',
        lastName: 'Antônio',
        age: 38
      },
      {
        firstName: 'Pedro',
        lastName: 'Prado',
        age: 26
      },
    ]
    return of(peopleArray)
  }
}
