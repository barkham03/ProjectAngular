import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.post('http://localhost:4002/getData', 138684);
  }

  getUser(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
