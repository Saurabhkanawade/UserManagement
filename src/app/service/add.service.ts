import { User } from './../users/list-users/list-users.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  baseURL='http://localhost:3000/';

  constructor(private httpClient:HttpClient) { }

  getUserData():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL+ 'posts')
  }

  getUserDataId(id : any):Observable<Object>{
    return this.httpClient.get(this.baseURL+'posts/' + id)
  }

  postUser(userData:any){
    return this.httpClient.post(this.baseURL+'posts',userData)
  }

  deleteUser(id:any){
    return this.httpClient.delete(this.baseURL+'posts/'+id)
  }

  updateUser(id:any,userObj:any){
    return this.httpClient.put(this.baseURL+'posts/'+id,userObj)
  }
  
 

}
