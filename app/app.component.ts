import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <router-outlet></router-outlet>
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
