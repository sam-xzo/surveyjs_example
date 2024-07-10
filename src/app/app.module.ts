import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyModule } from 'survey-angular-ui';
import { SurveyCreatorComponent } from './Survey/survey-creator/survey-creator.component';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { SurveyFormComponent } from './Survey/survey-form/survey-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyCreatorComponent,
    SurveyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveyModule,
    SurveyCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
