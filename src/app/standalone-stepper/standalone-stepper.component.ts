import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatStepperModule  } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { MatButtonModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatToolbarModule } from '@angular/material';
@Component({
  selector: 'app-standalone-stepper',
  standalone: true,
  imports: [CommonModule,BrowserModule,MatStepperModule,MatIconModule,ReactiveFormsModule, FormsModule,],
  templateUrl: './standalone-stepper.component.html',
  styleUrls: ['./standalone-stepper.component.scss']
})
export class StandaloneStepperComponent {

}
