import { Component, OnInit } from '@angular/core';
import {Job} from "../../model/job";
import jobs from '../../../assets/data.json';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  jobSelected! : Job;
  public jobList : Job[] = [];

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.jobList = jobs;
    this.jobList.forEach(job => {
      if(job.id === +this.activatedRoute.snapshot.params['id']){
        this.jobSelected = job;
      }
    })


  }

  public getCompanyLogo(){
    if(this.jobSelected){
      let style = {
        'background-color' : this.jobSelected.logoBackground,
        'background-image' : 'url(' + this.jobSelected.logo +')',
      };
      return style;
    }
    return null
  }
}
