import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ICar } from '../car-list/Car';
import { IREG } from '../car-list/Car';

import { CarsService } from '../shared/cars.service';


@Component({
  selector: 'app-place-ad',
  templateUrl: './place-ad.component.html',
  styleUrls: ['./place-ad.component.css']
})
export class PlaceAdComponent implements OnInit {
  errorMessage: string;
  REGS: IREG[];

  regNumber: string;

  constructor(private _carRegService: CarsService) {}


  vehicleLookUp(): void {
    this._carRegService.vehicleLookUp(this.regNumber).subscribe(REG => {
      this.REGS = REG;
      console.log(this.REGS[0].CarMake)
      
    },
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {}
}
