import { Component, OnInit, ApplicationRef } from '@angular/core';
import { StoreService } from '../store.service';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit {

  counter: number;
  constructor(private store: StoreService, private appRef: ApplicationRef) {
    this.store.getCounter().subscribe((counter: number) => {
      this.counter = counter;
      this.appRef.tick();
    });

  }

  ngOnInit(): void {

  }

  plus() {
    this.store.setCounter(this.counter + 1);
  }

}
