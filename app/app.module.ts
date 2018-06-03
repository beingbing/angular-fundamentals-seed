import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';


import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'passenger', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true}),
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
