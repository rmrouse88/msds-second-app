import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

export interface customerForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  sex: string;
  minEmployment:string;
}

// export interface prediction {
//   prediction: number;
// }

@Injectable()
export class FormSubmissionService {

  constructor(private http : HttpClient) { }

  baseUrl:string = "/predict"

  getShit(formValue): Observable<any> {
    return this.http.get<any>(this.baseUrl, { params: formValue })
  }
}


