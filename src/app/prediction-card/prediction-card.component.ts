import { Component, OnInit, Input } from '@angular/core';

import { FormSubmissionService } from '../form-control/reactive-form/form-submission.service';

@Component({
  selector: 'app-prediction-card',
  templateUrl: './prediction-card.component.html',
  styleUrls: ['./prediction-card.component.css']
})
export class PredictionCardComponent implements OnInit {
  cardTitle: string = "Congratulations!"
  @Input() response:string;

  verdict:string;

  constructor(private fss: FormSubmissionService) { }

  ngOnInit() {
    this.verdict = this.fss.modelResponse;
  }




}
