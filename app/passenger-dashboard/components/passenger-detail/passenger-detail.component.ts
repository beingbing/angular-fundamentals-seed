import { Passenger } from './../../models/passenger.interfase';
import { Component, OnChanges, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `<div>
    <span class="status" [class.checked-in]="detail.checkedIn"></span>
    <div *ngIf="editing"><input type="text" [value]="detail.fullName" (input)="onNameChange(name.value)" #name></div>
    <div *ngIf="!editing">{{detail.fullName}}</div>
    <div class="date">
    Check in date: 
    {{detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked In'}}
    </div>
    <!--<div class="children">
        Children: {{detail.children?.length || 0}}
    </div>-->
    <button (click)="toggleEdit()">{{editing ? 'Done': 'Edit'}}</button>
    <button (click)="onRemove()">Remove</button>
    </div>`
})
export class PassengerDetailComponent implements OnChanges, OnInit {
    @Input() public detail: Passenger;
    @Output() public remove: EventEmitter<Passenger> = new EventEmitter();
    @Output() public edit: EventEmitter<Passenger> = new EventEmitter();
    public editing: boolean = false;
    constructor() {}

    public onNameChange(name: string) {
        this.detail.fullName = name;
    }

    public toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    public onRemove() {
        this.remove.emit(this.detail);
    }

    public ngOnChanges(changes) {
        console.log('ngOnChanges');
        if (changes.datial) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }

    public ngOnInit() {
        console.log('ngOnInit');
    }
}