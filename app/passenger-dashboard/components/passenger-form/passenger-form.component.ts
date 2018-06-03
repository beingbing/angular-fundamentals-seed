import { Passenger } from './../../models/passenger.interfase';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `<div>
        Form !
        {{detail | json}}
    </div>`
})
export class PassengerFormComponent {
    @Input() detail: Passenger;
    constructor() {
        //
    }
}