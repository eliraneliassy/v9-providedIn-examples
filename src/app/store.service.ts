import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {
    console.log('New instance of Store Service');
  }
}
