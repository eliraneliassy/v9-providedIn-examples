import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  constructor(private store: StoreService) { }

  ngOnInit(): void {
  }

}
