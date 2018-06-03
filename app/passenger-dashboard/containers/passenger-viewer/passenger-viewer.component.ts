import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Passenger } from './../../models/passenger.interfase';
import { ActivatedRoute, Router, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `<div>
        <button (click)="goBack()">&lsaquo; go Back</button>
        <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)"></passenger-form>
    </div>`
})
export class PassengerViewerComponent implements OnInit {
    public passenger: Passenger;
    constructor(
        private passengerService: PassengerDashboardService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    public ngOnInit() {
        this.route.params.switchMap((data: Passenger) => this.passengerService.getPassenger(data.id)).subscribe((data: Passenger) => this.passenger = data);
    }

    public onUpdatePassenger(event: Passenger) {
        this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
            this.passenger = Object.assign({}, this.passenger, event);
        })
    }

    public goBack() {
        this.router.navigate(['/passenger']);
    }
}