import { Passenger } from './../../models/passenger.interfase';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `<div>
    <span class="status" [class.checked-in]="detail.checkedIn"></span>
    {{detail.fullName}}
    <div class="date">
    Check in date: 
    {{detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked In'}}
    </div>
    <div class="children">
        Children: {{detail.children?.length || 0}}
    </div>
    </div>`
})
export class PassengerDetailComponent {
    @Input() public detail: Passenger;
    constructor() {}
}