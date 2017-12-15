import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import { IUser } from './user';


@Injectable()
export class UserService {

  private isUserLogginIn;
  private username;

  private _userURL = 'http://localhost:3000/users';

  constructor(private _http: HttpClient) {
    this.isUserLogginIn = false;
   }

   getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this._userURL)
    .do(data => console.log('All' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
  
   setUserLoggedIn(){
     this.isUserLogginIn = true;
   }

   getUserLoggedIn(){
     return this.isUserLogginIn;
   }

   RegisterUser(newUser){
     
     this._http.post(this._userURL, newUser);
   }

}
