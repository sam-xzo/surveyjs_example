import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core";

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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  surveyModel: Model = new Model();
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
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
    survey.onComplete.add(this.alertResults);
  }


}
