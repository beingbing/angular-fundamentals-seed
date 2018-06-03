import { Component } from '@angular/core';
interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkedInDate?: number | null
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
          <p>{{passenger | json}}</p>
          <div class="date">
          Check in date: 
          {{passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked In'}}
          </div>
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
    checkedIn: true,
    checkedInDate: 1490742000000
  },{
    id: 2,
    fullName: 'Rose',
    checkedIn: false,
    checkedInDate: null
  },{
    id: 3,
    fullName: 'James',
    checkedIn: true,
    checkedInDate: 1491606000000
  },{
    id: 4,
    fullName: 'Louise',
    checkedIn: true,
    checkedInDate: 1488412800000
  },{
    id: 5,
    fullName: 'Tina',
    checkedIn: false,
    checkedInDate: null
  }];

  constructor() {
    //
  }

  public handleChange(value: string) {
    this.name = value;
    console.log(this.name);
  }
}
