import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ICar } from '../shared/Car';
import { IREG } from '../shared/Car';

import { CarsService } from '../shared/cars.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-place-ad',
  templateUrl: './place-ad.component.html',
  styleUrls: ['./place-ad.component.css']
})
export class PlaceAdComponent implements OnInit {
  errorMessage: string;
  REGS: IREG[];

  make:string;
  model:string;
  fueltype:string;
  year:number;
  description;
private exampleXMLFile = "http://ie.carregistrationapi.com/sample.xml"


  regNumber: string;
  builtUrl:string;
  private exampleURL = "https://www.regcheck.org.uk/api/reg.asmx/CheckIreland?RegistrationNumber=08MO11758&username=niallmcc";

  constructor( private _http: HttpClient ,private _carRegService: CarsService) {}

  reglookup(){
    this.builtUrl = "https://www.regcheck.org.uk/api/reg.asmx​​/CheckIreland?RegistrationNumber="+this.regNumber+"&username=niallmcc";
    console.log("Here is the reg you looked up:  " + this.regNumber);
    
        return this._http.get(this.builtUrl)
        .do(data => console.log('All' + JSON.stringify(data)))      
  }

  vehicleLookUp(): void {
    this._carRegService.vehicleLookUp(this.regNumber).subscribe(REG => {
      this.REGS = REG;
      console.log(this.REGS[0].CarMake)
      
    },
      error => this.errorMessage = <any>error);

      this._http.get(this.exampleXMLFile, { responseType: 'text' }).subscribe(response => {
        console.log(response);
      });
  }

  ngOnInit() {}
}
