import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input 
      type="text" 
      [value]="name"
      (input)="handleChange($event.target.value)">

      <template [ngIf]="name.length > 2">
      <div>Searching for ... {{name}}</div>
      </template>
      <div *ngIf="name.length > 2">Searching for ... {{name}}</div>
    </div>
  `
})
export class AppComponent {
  public name: string = '';

  constructor() {
    //
  }

  public handleChange(value: string) {
    this.name = value;
    console.log(this.name);
  }
}
