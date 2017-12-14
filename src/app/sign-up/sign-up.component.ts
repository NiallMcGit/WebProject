import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { create_a_user } from '../../../api/controllers/controllerUserController'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string;
  fname: string;
  lname: string;
  password: string;
  password2: string;

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  register() {

    const newUser = {
      email: this.email,
      fname: this.fname,
      lname: this.lname,
      password: this.password
    }

    if(this.password == this.password2)
    {
      this.user.RegisterUser(newUser);
    }


  }
}
