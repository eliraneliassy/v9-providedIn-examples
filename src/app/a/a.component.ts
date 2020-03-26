
import { Component, OnInit } from '@angular/core';
import { StoreService, TestClass} from 'store';


@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  constructor(private store: StoreService, private testClass: TestClass) { }

  ngOnInit(): void {
  }

}
