import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLogginIn;
  private username;

  constructor() {
    this.isUserLogginIn = false;
   }

   setUserLoggedIn(){
     this.isUserLogginIn = true;
   }

   getUserLoggedIn(){
     return this.isUserLogginIn;
   }

}
