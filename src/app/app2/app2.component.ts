import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit {

  counter: number;

  constructor(private store: StoreService) { }

  ngOnInit(): void {
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
