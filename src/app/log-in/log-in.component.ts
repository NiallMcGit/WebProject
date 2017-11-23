import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logIn(email:HTMLInputElement, password:HTMLInputElement):boolean {
    console.log(`Attempting login using Email: ${email.value} and Password: ${password.value}`)
    return false;
  }

}
