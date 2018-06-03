import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interfase';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
        <passenger-count [item]="passengers"></passenger-count>
        <passenger-detail *ngFor="let passenger of passengers;"
        [detail]="passenger"></passenger-detail>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    public passengers: Passenger[];

    constructor() {}

    public ngOnInit() {
        console.log('ngOnInit');
        this.passengers =  [{
            id: 1,
            fullName: 'Stephen',
            checkedIn: true,
            checkedInDate: 1490742000000,
            children: null
        }, {
            id: 2,
            fullName: 'Rose',
            checkedIn: false,
            checkedInDate: null,
            children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
        }, {
            id: 3,
            fullName: 'James',
            checkedIn: true,
            checkedInDate: 1491606000000,
            children: null
        }, {
            id: 4,
            fullName: 'Louise',
            checkedIn: true,
            checkedInDate: 1488412800000,
            children: [{ name: 'Jessica', age: 1 }]
        }, {
            id: 5,
            fullName: 'Tina',
            checkedIn: false,
            checkedInDate: null,
            children: null
        }];
    }

}