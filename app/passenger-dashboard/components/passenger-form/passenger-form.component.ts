import { Baggage } from './../../models/baggage.interface';
import { Passenger } from './../../models/passenger.interfase';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `<form #form="ngForm" novalidate>
        <div>
            pasenger name:
                <input type="text" name="fullname" #fullname="ngModel" required [ngModel]="detail?.fullName">
                <div *ngIf="fullname.errors?.required && fullname.touched" class="error">
                    Passenger name is required
                </div>
                {{fullname.errors | json}}
        </div>
        <div>
        pasenger ID:
        <input type="number" name="id" required #id="ngModel" [ngModel]="detail?.id">
        <div *ngIf="id.errors?.required && id.dirty" class="error">
                    Passenger ID is required
                </div>
        {{id.errors | json}}
        </div>
        
        <div>
            <label>
                <input type="checkbox" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
            </label>
        </div>

        <div *ngIf="form.value.checkedIn">
            Check in date: 
            <input type="number" name="checkInDate" [ngModel]="detail?.checkedInDate">
        </div>

        <div>
            Luggage: 
            <select name="baggage" [ngModel]="detail?.baggage">
                <option *ngFor="let item of baggage" [value]="item.key" [selected]="item.key === detail?.baggage">
                    {{item.value}}
                </option>
            </select>
        </div>
        <button type="submit" [disabled]="form.invalid">
            Update passenger
        </button>
    </form>`
})
export class PassengerFormComponent {
    @Input() detail: Passenger;
    public baggage: Baggage[] = [{
        key: 'none',
        value: 'No Baggage'
    },{
        key: 'hand-only',
        value: 'Hand Baggage'
    },{
        key: 'hold-only',
        value: 'Hold Baggage'
    },{
        key: 'hand-hold',
        value: 'Hand and Hold Baggage'
    }];
    constructor() {
        //
    }

    public toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkedInDate = Date.now();
        }
    }
}