import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list';

  onServerAdded(data) {
    // console.log(`This is from app-component: ${data}`);
    console.log(`the app-component says 12 + 12 =`, 12+12);
  }
}
