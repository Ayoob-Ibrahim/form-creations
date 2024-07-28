import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components-form/question/question.component';
import { GeneratingQuesComponent } from './components-form/generating-ques/generating-ques.component';
import { ResponsesComponent } from './components-form/responses/responses.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginPageComponent } from './components-form/login-page/login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatStepperModule, matStepperAnimations } from '@angular/material/stepper';
import { BodyComponent } from './components-form/body/body.component';
import { SidenavComponent } from './components-form/sidenav/sidenav.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { ApplicationComponent } from './pages/application/application.component';
import { RouterLink } from '@angular/router';
import { FormComponentComponent } from './pages/form-component/form-component.component';
import { StepperComponent } from './pages/stepper/stepper.component';
import { LayoutComponent } from './components-form/layout/layout.component';
import { StandaloneComponent } from './pages/standalone/standalone.component';
import { StandaloneStepperComponent } from './standalone-stepper/standalone-stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './pages/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { InjectableModalComponent } from './pages/injectable-modal/injectable-modal.component';
import { GridViewComponent } from './pages/grid-view/grid-view.component';



@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    GeneratingQuesComponent,
    ResponsesComponent,
    LoginPageComponent,
    BodyComponent,
    SidenavComponent,
    DashBoardComponent,
    ApplicationComponent,
    FormComponentComponent,
    StepperComponent,
    LayoutComponent,
    ModalComponent,
    // InjectableModalComponent,
    GridViewComponent
    
  ],
  imports: [
    BrowserModule,
    StandaloneComponent,
    AppRoutingModule,
    RouterLink,
    DropdownModule,
    FormsModule,
    ButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule, MatButtonModule, MatSelectModule, MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    StandaloneStepperComponent,
    BrowserAnimationsModule,
    MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
