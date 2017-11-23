import { ICar } from '../car-list/car';
import { IREG } from '../car-list/car';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable()
export class CarsService {

  private _username = "niallmcc";

  private _carUrl = "http://localhost:3000/cars";

  private _RegLookUpURL = "https://www.regcheck.org.uk/api/reg.asmx​​";

  // Dont use!
  private exampleURL = "https://www.regcheck.org.uk/api/reg.asmx/CheckIreland?RegistrationNumber=08MO11758&username=niallmcc";

  constructor(private _http: HttpClient) { }

  getCars(): Observable<ICar[]> {
    return this._http.get<ICar[]>(this._carUrl)
    .do(data => console.log('All' + JSON.stringify(data)))
    .catch(this.handleError);

  }

  // Send get request
  vehicleLookUp(reg:string): Observable<IREG[]> {
    return this._http.get<IREG[]>(this._RegLookUpURL+"/CheckIreland?RegistrationNumber="+reg+"&username="+this._username)
    .do(data => console.log('All' + JSON.stringify(data)))
    .catch(this.handleError);
    }

  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
