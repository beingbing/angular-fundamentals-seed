import { Component } from '@angular/core';
interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers;let i = index;">
        <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{i+1}}: {{passenger.fullName}}
        </li>
      </ul>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers;let i = index;">
        <span class="status" [ngClass]="{'checked-in': passenger.checkedIn, 'checked-out': !passenger.checkedIn}"></span>
          {{i+1}}: {{passenger.fullName}}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  public name: string = '';
  public passengers: Passenger[] = [{
    id: 1,
    fullName: 'Stephen',
    checkedIn: true
  },{
    id: 2,
    fullName: 'Rose',
    checkedIn: false
  },{
    id: 3,
    fullName: 'James',
    checkedIn: true
  },{
    id: 4,
    fullName: 'Louise',
    checkedIn: true
  },{
    id: 5,
    fullName: 'Tina',
    checkedIn: false
  }];

  constructor() {
    //
  }

  public handleChange(value: string) {
    this.name = value;
    console.log(this.name);
  }
}
