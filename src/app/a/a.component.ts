import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  constructor(private store: StoreService) { }

  ngOnInit(): void {
  }

}
