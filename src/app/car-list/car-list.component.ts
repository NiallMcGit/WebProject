import { CarsService } from '../shared/cars.service';
import { Component, OnInit } from '@angular/core';

import { ICar } from './Car';
import { IREG } from './Car';



@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  showDescription: boolean = false;
  errorMessage: string;

  cars: ICar[];

  constructor(private _carservice: CarsService) {}


  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

  
  public ngOnInit(): void {
    this._carservice.getCars().subscribe(cars => {
      this.cars = cars;
      console.log("Data: "+this.cars[0].carMake)
    },
      error => this.errorMessage = <any>error);

  }
}
