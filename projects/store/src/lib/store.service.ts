import { Injectable, ɵɵdefineInjectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class StoreService {

  constructor(private injector: Injector) {
    console.log('New StoreService instance created.');
    console.log(this.injector);
  }
}

export class TestClass {
  static ɵprov = ɵɵdefineInjectable({
    token: TestClass,
    providedIn: 'root',
    factory: () => new TestClass()
  });

  constructor() {

  }
}
