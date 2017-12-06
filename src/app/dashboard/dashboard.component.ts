import { UserService } from '../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { LogInComponent } from '../log-in/log-in.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user: UserService) {
    
   }

  ngOnInit() {
  }

}
