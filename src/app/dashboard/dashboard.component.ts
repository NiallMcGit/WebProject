import { UserService } from '../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { LogInComponent } from '../log-in/log-in.component'
import { DashboardFooterComponent } from '../dashboard-footer/dashboard-footer.component';
import { IUser } from '../shared/user'
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  errorMessage: string;
  users: IUser[];
  username:string;
  

  constructor(private _userservice: UserService) {
    
   }

  ngOnInit() {
    this._userservice.getUsers().subscribe(users => {
      this.users = users;
    },
      error => this.errorMessage = <any>error);
  }

}
