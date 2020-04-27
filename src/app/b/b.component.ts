import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  step1 = `
  ng g m app2
  ng g c app2 --module=app2
  `;

  step2 = `
  platformBrowserDynamic().bootstrapModule(App2Module)
  .catch(err => console.error(err));
  `;

  step3 = `
  @NgModule({
    declarations: [App2Component],
    imports:  [
      BrowserModule
    ],
    bootstrap: [App2Component]
  })
  export class App2Module { }
  `;

  step4 = `
  ...
  <body class="mat-typography">
    <app-root></app-root>
    <app-app2></app-app2>
  </body>
  ...
  `;

  constructor(private store: StoreService) { }

  ngOnInit(): void {
  }

}
