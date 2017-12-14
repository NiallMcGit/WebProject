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

  private _RegLookUpURL = "https://www.regcheck.org.uk/api/reg.asmx​​/CheckIreland?RegistrationNumber="; // API Endpoint
  private buildURL;

  private _carUrl = "http://localhost:3000/cars"; // Fake JSON server, start server :   json-server --watch db.json

  // Dont use! URL to check a reg. https://www.regcheck.org.uk/api/reg.asmx?op=CheckIreland
  private exampleURL = "https://www.regcheck.org.uk/api/reg.asmx/CheckIreland?RegistrationNumber=08MO11758&username=niallmcc";


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

    return this._http.get(this.buildURL)
    .do(data => console.log('All' + JSON.stringify(data)))
    .catch(this.handleError)
    
    }

  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
