import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';


import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
