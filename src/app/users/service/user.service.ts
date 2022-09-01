import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Object> {
    return this.httpClient.get('http://localhost:3000/posts');
  }

  // getDataById(): Observable<Object> {
  //   return this.httpClient.get('http://localhost:3000/posts');
  // }
}
