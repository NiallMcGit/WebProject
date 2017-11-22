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
        "carDescription": "Great Car",
        "imageURL": "http://img11.hostingpics.net/pics/846696avantgaucheeglise3d6ec97.jpg"
    },
    {
      "carId": 2,
      "carMake": "BMW",
      "carModel": "320CD",
      "carYear": 2006,
      "carColour": "Le Mans Blue",
      "carMileage": 78000,
      "carPrice": 7000,
      "carDescription": "Grand Car",
      "imageURL": "http://www.bmwsportscar.com/wp-content/uploads/2016/01/bmw-e46-m3-2006-IB-ZCP-01-1024x576.jpg"
      
  }
];
  
  
  constructor() { }

toggleDescription():void{
  this.showDescription = !this.showDescription;
}

}
