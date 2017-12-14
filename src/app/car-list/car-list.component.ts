import { CarsService } from '../shared/cars.service';
import { Component, OnInit } from '@angular/core';

import { ICar } from '../shared/car';
import { IREG } from '../shared/car';



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
    },
      error => this.errorMessage = <any>error);

  }
}
