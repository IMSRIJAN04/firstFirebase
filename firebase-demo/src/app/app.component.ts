import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-demo';
  
  values = [];

  update(value: string) {
    if(value) {
      this.values.push(value);
    }  
  }

}
