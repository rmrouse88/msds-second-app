import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-prediction-card',
  templateUrl: './prediction-card.component.html',
  styleUrls: ['./prediction-card.component.css']
})
export class PredictionCardComponent implements OnInit {
  cardTitle: string = "Congratulations!"
  @Input() response:string;
  constructor() { }

  ngOnInit() {
  }

}
