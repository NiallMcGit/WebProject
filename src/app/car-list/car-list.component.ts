import { Component, OnInit } from '@angular/core';

import { Car } from './Car';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  products: Car[] = [
    
  ];
  
  
  constructor() { }

  ngOnInit() {
  }

}
