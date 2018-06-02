import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <button (click)="handleClick(userName.value)">
      Get value
    </button>
      <input type="text" #userName>
      <div>{{name}}</div>
    </div>
  `
})
export class AppComponent {
  public name: string = 'samar';

  constructor() {
    //
  }

  public handleClick(value: string) {
    this.name = value;
    console.log(this.name);
  }
}
