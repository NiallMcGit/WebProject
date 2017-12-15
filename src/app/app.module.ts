import { AuthguardGuard } from './authguard.guard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CarsService } from './shared/cars.service';
import { UserService } from './shared/user.service';


import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { PlaceAdComponent } from './place-ad/place-ad.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'placead', component: PlaceAdComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'displaycars', component: CarListComponent },

  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardFooterComponent
  }
 // { path : 'users/:name'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    SignUpComponent,
    LogInComponent,
    PlaceAdComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactusComponent,
    DashboardComponent,
    DashboardFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CarsService, UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
