import { Passenger } from './models/passenger.interfase';

export class PassengerDashboardService {
    constructor() {
        //
    }

    public getPassengers(): Passenger[] {
        return [{
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