import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interfase';
import { Router } from '@angular/router';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
        <passenger-count [item]="passengers"></passenger-count>
        <div *ngFor="let passenger of passengers;">{{passenger.fullName}}</div>
        <passenger-detail *ngFor="let passenger of passengers;"
        [detail]="passenger" (remove)="handleRemove($event)" (edit)="handleEdit($event)" (view)="handleView($event)"></passenger-detail>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    public passengers: Passenger[];

    constructor(
        private passengerService: PassengerDashboardService,
        private router: Router
    ) { }

    public ngOnInit() {
        console.log('ngOnInit');
        this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
            console.log('data', data);
            this.passengers = data;
        }, (error: any) => {console.log('error', error)});
    }

    public handleRemove(event: Passenger) {
        this.passengerService.removePassenger(event).subscribe((data: Passenger) => {
            console.log(data);
        this.passengers = this.passengers.filter((passenger: Passenger) => {
            return passenger.id !== event.id;
        });
    }, (error: any) => {console.log('error', error)});
    }

    public handleEdit(event: Passenger) {
        this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
            console.log(data);
            this.passengers = this.passengers.map((passenger: Passenger) => {
                if (passenger.id === event.id) {
                    passenger = Object.assign({}, passenger, event);
                }
                return passenger;
            });
        }, (error: any) => {console.log('error', error)});
    }

    public handleView(event: Passenger) {
        this.router.navigate(['/passenger', event.id]);
    }

}