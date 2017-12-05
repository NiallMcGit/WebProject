import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string;
  password: string;


  constructor() { }

  ngOnInit() {
  }

  register()
{
    if (this.email == null || this.password == null) {
      alert("Please enter an email & password.");
    }
    else {
      console.log("Email: " + this.email);
      console.log("Password: " + this.password);
    }
  }
}
