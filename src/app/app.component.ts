import { Component, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter: number;
  constructor(private store: StoreService, private appRef: ApplicationRef) {
    this.store.getCounter().subscribe((counter: number) => {
      this.counter = counter;
      this.appRef.tick();
    });

  }

  plus() {
    this.store.setCounter(this.counter + 1);
  }

}
