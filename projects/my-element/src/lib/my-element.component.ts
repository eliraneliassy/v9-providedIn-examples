import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-element',
  template: `
    <p>
      my-element works!
    </p>
  `,
  styles: []
})
export class MyElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
