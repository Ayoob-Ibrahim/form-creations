import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components-form/question/question.component';
import { GeneratingQuesComponent } from './components-form/generating-ques/generating-ques.component';
import { ResponsesComponent } from './components-form/responses/responses.component';
import { LoginPageComponent } from './components-form/login-page/login-page.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { GridViewComponent } from './pages/grid-view/grid-view.component';
import { ApplicationComponent } from './pages/application/application.component';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './pages/form-component/form-component.component';
import { StepperComponent } from './pages/stepper/stepper.component';
import { LayoutComponent } from './components-form/layout/layout.component';
import { StandaloneComponent } from './pages/standalone/standalone.component';
import { StandaloneStepperComponent } from './standalone-stepper/standalone-stepper.component';
import { ModalComponent } from './pages/modal/modal.component';

const routes: Routes = [


  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginPageComponent
  },



  {
    path: '', component: LayoutComponent, children: [
      { path: 'ques', component: QuestionComponent },
      { path: 'gen-ques', component: GeneratingQuesComponent },
      { path: 'reports', component: ResponsesComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'fleet', component: GridViewComponent },
      { path: 'application', component: ApplicationComponent },
      { path: 'form', component: FormComponentComponent },
      { path: 'step', component: StepperComponent },
      // { path: 'test', component: AppComponent },
      { path: 'stand', component: StandaloneComponent },
      { path: 'modal', component: ModalComponent },
      {
        path: 'stepstand', component: StandaloneStepperComponent
      }

    ]
  }







];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
