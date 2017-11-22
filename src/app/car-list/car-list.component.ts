import { Component } from '@angular/core';

import { ICar } from './Car';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  showDescription: boolean = false;

  cars: ICar[] =[
    {
        "carId": 1,
        "carMake": "Opel",
        "carModel": "Astra OPC",
        "carYear": 2007,
        "carColour": "Black",
        "carMileage": 66000,
        "carPrice": 7000,
        "carDescription": "Great Car"
    },
    {
      "carId": 2,
      "carMake": "BMW",
      "carModel": "320CD",
      "carYear": 2006,
      "carColour": "Le Mans Blue",
      "carMileage": 78000,
      "carPrice": 7000,
      "carDescription": "Grand Car"
  }
];
  
  
  constructor() { }

toggleDescription():void{
  this.showDescription = !this.showDescription;
}

}
