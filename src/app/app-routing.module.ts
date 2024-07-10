import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyCreatorComponent } from './Survey/survey-creator/survey-creator.component';
import { SurveyFormComponent } from './Survey/survey-form/survey-form.component';

const routes: Routes = [
  {
    path: "",
    component: SurveyCreatorComponent
  },
  {
    path: "form",
    component: SurveyFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
