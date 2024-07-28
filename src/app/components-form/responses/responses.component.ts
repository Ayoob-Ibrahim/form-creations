import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent {
  isLinear = false;
  // firstFormGroup: any


  constructor(private fb: FormBuilder) { }

 
  ngOnInit() {

  }

}