import { Passenger } from './../../models/passenger.interfase';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'passenger-count',
    template: `<div><h3>Airline Passengers</h3>
        <div>
            Total Passengers: {{item.length}}
        </div>
        <div>
            Total checked in: {{checkedInCount()}} / {{item.length}}
        </div>
    </div>`
})
export class PassengerCountComponent {
    @Input() public item: Passenger[];
    constructor() {}

    public checkedInCount(): number {
        if (!this.item) return;
        return this.item.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
}