import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string;
  password: string;
  password2: string;

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  register()
{

    if(this.email == 'niall' && this.password == 'pass1')
    {
      if(this.password == this.password2){
        this.user.setUserLoggedIn();
        this.router.navigate(['dashboard']);
      }

    }
    else if(this.email == 'connor' && this.password == 'pass2')
    {
      this.user.setUserLoggedIn();
      
      this.router.navigate(['dashboard']);
    }
    else if(this.email == 'frankie' && this.password == 'pass3')
    {
      this.user.setUserLoggedIn();
      
      this.router.navigate(['dashboard']);
    }

  }
}
