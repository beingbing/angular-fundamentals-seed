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
      [value]="name"
      (input)="handleInput($event)"
      (blur)="handleBlur($event)">
      <div>{{name}}</div>
    </div>
  `
})
export class AppComponent {
  public title: string;
  public name: string = 'samar';
  public logo: string = 'img/logo.svg';

  constructor() {
    this.title = 'Ultimate Angular';
  }

  public handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event.target.value);
  }

  public handleInput(event: any) {
    this.name = event.target.value;
    console.log(event.target.value);
  }

  public handleClick() {
    this.name = 'Shaikh'
  }
}
