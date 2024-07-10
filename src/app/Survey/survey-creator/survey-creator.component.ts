import { Component, OnInit } from '@angular/core';
import { SurveyCreatorModel, ICreatorOptions } from "survey-creator-core";

const creatorOptions: ICreatorOptions = {
  showLogicTab: false,
  isAutoSave: false,
  showJSONEditorTab: false,
  showPreviewTab: false,
};

@Component({
  selector: 'app-survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.scss']
})
export class SurveyCreatorComponent implements OnInit {

  surveyCreatorModel: SurveyCreatorModel = new SurveyCreatorModel(creatorOptions);

  constructor() { }

  ngOnInit(): void {
    this.surveyCreatorModel.showSidebar = false;
    this.surveyCreatorModel.showSaveButton = true;
    // this.surveyCreatorModel.saveSurveyFunc((saveNo) => { })
  }

}
