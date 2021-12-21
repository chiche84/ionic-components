import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComponente } from '../interfaces/interface';
import { delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbunes(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(){
    return this.http.get<any[]>('/assets/data/superheroes.json')
        .pipe(
          delay(1500)
        );
  }

  getMenu(){
    return this.http.get<IComponente[]>('/assets/data/menu.json');
  }

}
