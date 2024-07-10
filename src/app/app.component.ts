import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";


const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
};

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  surveyModel: Model = new Model();
  surveyCreatorModel: SurveyCreatorModel = new SurveyCreatorModel(creatorOptions);

  alertResults (sender:any) {
    const results = JSON.stringify(sender.data);
    alert(results);
    //alert(this.surveyModel);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }
  ngOnInit() {
    const creator = new SurveyCreatorModel(creatorOptions);
    this.surveyCreatorModel = creator;
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
    survey.onComplete.add(this.alertResults);
  }


}
