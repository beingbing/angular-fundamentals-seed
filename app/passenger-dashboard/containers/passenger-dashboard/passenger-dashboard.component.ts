import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interfase';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
        <passenger-count [item]="passengers"></passenger-count>
        <div *ngFor="let passenger of passengers;">{{passenger.fullName}}</div>
        <passenger-detail *ngFor="let passenger of passengers;"
        [detail]="passenger" (remove)="handleRemove($event)" (edit)="handleEdit($event)"></passenger-detail>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    public passengers: Passenger[];

    constructor(
        private passengerService: PassengerDashboardService
    ) { }

    public ngOnInit() {
        console.log('ngOnInit');
        this.passengerService.getPassengers().then((data: Passenger[]) => {
            console.log('data', data);
            this.passengers = data;
        });
    }

    public handleRemove(event: Passenger) {
        this.passengerService.removePassenger(event).then((data: Passenger) => {
            console.log(data);
        this.passengers = this.passengers.filter((passenger: Passenger) => {
            return passenger.id !== event.id;
        });
    });
    }

    public handleEdit(event: Passenger) {
        this.passengerService.updatePassenger(event).then((data: Passenger) => {
            console.log(data);
            this.passengers = this.passengers.map((passenger: Passenger) => {
                if (passenger.id === event.id) {
                    passenger = Object.assign({}, passenger, event);
                }
                return passenger;
            });
        });
    }

}