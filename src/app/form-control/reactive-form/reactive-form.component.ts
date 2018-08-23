import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router'

import { FormSubmissionService } from './form-submission.service';
import { element } from '../../../../node_modules/protractor';
import { Route } from '@angular/compiler/src/core';

function confirmEmails(emailGroup:AbstractControl): {[key:string] : boolean} | null {
  let email = emailGroup.get('email');
  let confirmEmail = emailGroup.get('confirmEmail');
  if (email === confirmEmail) {
    return null
  }
  return {'match' : true};
}

function range(min: number, max: number) : ValidatorFn {
  return (c : AbstractControl) : {[key:string] : boolean} | null => {
    if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
      return {'range' : true};
    };
    return null;
  }
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formToggle:boolean = true;

  inputForm:FormGroup;

  response: boolean;
  cardTitle:string = 'Loan Response'

  constructor(private fb: FormBuilder,
              private service: FormSubmissionService,
              private router: Router) {}
  
  extraneous : string[] = ['firstName', 'lastName']

  ngOnInit() {
    this.inputForm = this.fb.group({
      "firstName" : ['', [Validators.required, Validators.minLength(3)] ],
      "lastName" : ['', [Validators.required] ],
      "ID": ['', [Validators.required] ],
      "GENDER": ['', [Validators.required] ],
      "INCOME": ['', [Validators.required, Validators.min(0)] ],
      "COST_GOODS" : ['', [Validators.required]],
      "CREDIT": ['', [Validators.required, Validators.min(0)] ],
      "TERM_LENGTH": ['', [Validators.required]],
      "OWN_CAR": ['', [Validators.required] ],
      "OWN_REALTY": ['', [Validators.required] ],
      "EDUCATION_LEVEL": ['', [Validators.required]],
      "DAYS_SINCE_BIRTH": ['', [Validators.required] ],
      "DAYS_START_JOB": ['', [Validators.required] ],
      "NUM_CHILDREN" : ['', [Validators.required]],
      "NUM_FAM_MEMBERS" : ['', [Validators.required]],
      "INCOME_TYPE" : ['', [Validators.required]],
      "ACCOMPANIED" : ['', [Validators.required]]
    })
  }

  targets : string[] = ["ID", "GENDER", "INCOME", "COST_GOODS", "CREDIT", "TERM_LENGTH", "OWN_CAR", "OWN_REALTY",
                        "EDUCATION_LEVEL", "DAYS_SINCE_BIRTH", "DAYS_START_JOB", "NUM_CHILDREN", "NUM_FAM_MEMBERS",
                        "INCOME_TYPE", "ACCOMPANIED"]
  
getShit() {

  this.formToggle = !this.formToggle // activate a temporary loading screen before observable kicks off a re-route

  let storage = {}
  for (let key in this.inputForm.value) {
    for (let i = 0; i < this.targets.length; i++) {
      if (this.targets[i] === key) {
        storage[key] = this.inputForm.value[key]
      }
    }
  }
  this.service.getShit(storage).subscribe((data) => {

    console.log(data)

    this.response = Boolean(data['default.probability'])

    this.service.setResponse(this.response);

    this.router.navigate(['/prediction-component'])

  })
}

}

