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
  filteredCars: ICar[];

  constructor(private _carservice: CarsService) {}

  _listFilter: string = ''; 
  
  get listFilter():string{
    return this._listFilter; 
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCars = this.listFilter ? this.performFilter(this.listFilter):this.cars;
  }

  performFilter(filterBy:string):ICar[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.cars.filter((product:ICar)=> product.carMake.toLocaleLowerCase().indexOf(filterBy) != -1);
  }

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

  
  public ngOnInit(): void {
    this._carservice.getCars().subscribe(cars => {
      this.cars = cars;
      this.filteredCars = this.cars;
    },
      error => this.errorMessage = <any>error);

  }
}
