import { Passenger } from './../../models/passenger.interfase';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `<form #form="ngForm" novalidate>
    {{detail | json}}
        <div>
            pasenger name:
                <input type="text" name="fullname" [ngModel]="detail?.fullName">
        </div>
        <div>
        pasenger ID:
        <input type="number" name="id" [ngModel]="detail?.id">
        </div>
        {{form.value | json}}
    </form>`
})
export class PassengerFormComponent {
    @Input() detail: Passenger;
    constructor() {
        //
    }
}