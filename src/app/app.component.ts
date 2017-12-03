import { Component } from '@angular/core';
import { CarsService } from './shared/cars.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CarsService]
})
export class AppComponent {
  title = 'Car Lot';
}
