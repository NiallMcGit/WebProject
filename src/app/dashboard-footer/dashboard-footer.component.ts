import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component'
import { UserService } from '../shared/user.service'
@Component({
  selector: 'app-dashboard-footer',
  templateUrl: './dashboard-footer.component.html',
  styleUrls: ['./dashboard-footer.component.css']
})
export class DashboardFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
