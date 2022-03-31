import { Component, OnInit } from '@angular/core';
import jobs from '../../../assets/data.json';
import {Job} from "../../model/job";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  public jobList : Job[] = [];
  public isFullTimeSelected = false;

  constructor() { }

  ngOnInit(): void {
    this.jobList = jobs;
  }


  public getCompanyLogo(job: Job): {"background-color": string}{
    let style = {
      'background-color' : job.logoBackground,
      'background-image' : 'url(' + job.logo +')',
    };
    return style;
  }

  toggleIsFullTime(){
    this.isFullTimeSelected = ! this.isFullTimeSelected;
  }
}
