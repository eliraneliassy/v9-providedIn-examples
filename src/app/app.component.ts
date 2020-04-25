import { Component } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter: number;
  constructor(private store: StoreService) {
    this.store.getCounter().subscribe((counter: number) => {
      this.counter = counter;
    });

  }

  plus() {
    this.store.setCounter(this.counter + 1);
  }

  reset() {
    this.store.setCounter(0);
  }
}
