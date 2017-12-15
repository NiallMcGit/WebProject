import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  logIn()
  {  
      if(this.email == 'niall' && this.password == 'pass1')
      {
          this.user.setUserLoggedIn();
          this.router.navigate(['dashboard']);
          alert("Hello "+ this.email +", Welcome to Car Lot")            
      }
      else if(this.email == 'conor' && this.password == 'pass2')
      {
          this.user.setUserLoggedIn();
          this.router.navigate(['dashboard']);
          alert("Hello "+ this.email +", Welcome to Car Lot")
      }
      else if(this.email == 'frankie' && this.password == 'pass3')
      {
          this.user.setUserLoggedIn();
          this.router.navigate(['dashboard']);
          alert("Hello "+ this.email +", Welcome to Car Lot")
      }
      else
      {
        console.log("Incorrect Username or Password");
        alert("Incorrect username or password" );
        console.log('Attempting login using Email: ' + this.email + ' and Password: ' + this.password);
      }
    }



}
