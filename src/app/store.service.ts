import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'platform'
})
export class StoreService {

  private counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    console.log('New instance of Store Service');
  }

  getCounter() {
    return this.counter.asObservable();
  }

  setCounter(num: number) {
    this.counter.next(num);
  }
}
