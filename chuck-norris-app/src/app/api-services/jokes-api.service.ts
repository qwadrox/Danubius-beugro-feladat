import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from '../models/Joke';

@Injectable({
  providedIn: 'root',
})
export class JokesApiService {
  constructor(private http: HttpClient) {}

  public API = 'https://api.chucknorris.io/jokes/';
  getCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.API + `categories`);
  }
  getJoke(category: String): Observable<Joke> {
    return this.http.get<Joke>(this.API + `random?category=${category}`);
  }
}
