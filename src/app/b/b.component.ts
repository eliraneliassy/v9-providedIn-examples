
import { Component, OnInit } from '@angular/core';
import {StoreService} from 'store';

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
