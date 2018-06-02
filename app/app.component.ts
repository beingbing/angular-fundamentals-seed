import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <button (click)="handleClick()">
      Change Name
    </button>
      <input
      type="text"
      [ngModel]="name"
      (ngModelChange)="handleChange($event)">
      <input
      type="text"
      [(ngModel)]="name">
      <div>{{name}}</div>
    </div>
  `
})
export class AppComponent {
  public title: string;
  public name: string = 'samar';

  constructor() {
    this.title = 'Ultimate Angular';
  }

  public handleChange(value: string) {
    this.name = value;
  }

  public handleClick() {
    this.name = 'Shaikh'
  }
}
