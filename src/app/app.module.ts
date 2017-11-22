import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { PlaceAdComponent } from './place-ad/place-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    SignUpComponent,
    LogInComponent,
    PlaceAdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
