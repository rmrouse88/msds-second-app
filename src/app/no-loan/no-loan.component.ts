import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-loan',
  templateUrl: './no-loan.component.html',
  styleUrls: ['./no-loan.component.css']
})
export class NoLoanComponent implements OnInit {
  cardTitle: string = "Oh no!"
  @Input()  response:string;
  constructor() { }

  ngOnInit() {
  }

}
