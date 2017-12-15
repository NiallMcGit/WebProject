import { ICar } from './car';
import { IREG } from './car';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable()
export class CarsService {

  private _username = "niallmcc";

  private exampleXMLFile = "http://ie.carregistrationapi.com/sample.xml"

  private buildURL;

  private _carUrl = "http://localhost:3000/cars"; // Fake JSON server, start server :   json-server --watch db.json


  constructor(private _http: HttpClient) { }

  getCars(): Observable<ICar[]> {
    return this._http.get<ICar[]>(this._carUrl)
    .do(data => console.log('All' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  // Send get request for car reg
  vehicleLookUp(reg:string): Observable<IREG[]> {

    this.buildURL = "https://www.regcheck.org.uk/api/reg.asmx​​/CheckIreland?RegistrationNumber="+reg+"&username=niallmcc";

    console.log("Here is the reg you looked up:  " + reg);

    // this._http.get(this.exampleXMLFile, { responseType: 'text' }).subscribe(response => {
    //   console.log(response);
    // });

    return this._http.get(this.exampleXMLFile)
    .do(data => console.log('All' + JSON.stringify(data)))
    .catch(this.handleError)
    
    // return this._http.get(this.buildURL).parseString(data, function(err, result){
      
    //       })
    }

  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
