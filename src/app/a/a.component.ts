import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  step1 = `
  ng new v9-providedIn-example --routing --style=scss
  ng add @angular/materail
  ng generate @angular/material:navigation nav
  ng g m a --route a --module app.module
  ng g m b --route b --module app.module
  `;

  step2 = `
    ng g lib store
    ng g s store --project=store
  `;

  constructor(private store: StoreService) { }

  ngOnInit(): void {
  }

}
