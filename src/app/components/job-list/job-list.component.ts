import { Component, OnInit } from '@angular/core';
import jobs from '../../../assets/data.json';
import {Job} from "../../model/job";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  public jobList : Job[] = [];
  public filterJobList : Job[] = [];
  public isFullTimeSelected = false;
  public searchTitleValue:string = '';
  public searchLocationValue:string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.jobList = jobs;
    this.filterJobList = jobs
  }


  public getCompanyLogo(job: Job){
    let style = {
      'background-color' : job.logoBackground,
      'background-image' : 'url(' + job.logo +')',
    };
    return style;
  }

  toggleIsFullTime(){
    this.isFullTimeSelected = ! this.isFullTimeSelected;
  }

  navigateToJob(job: Job){
    this.router.navigate(['/job',job.id])
  }

  search(){
    console.log('test');
    this.filterJobList = [];
    this.jobList.forEach(job => {

      if(job.position.toLowerCase().includes(this.searchTitleValue.toLowerCase())
        && job.location.toLowerCase().includes(this.searchLocationValue.toLowerCase())
        && ((job.contract === 'Full Time' && this.isFullTimeSelected) || (!this.isFullTimeSelected))){
        this.filterJobList.push(job);
      }
    })

    if(this.filterJobList.length === 0){
      this.filterJobList = jobs
    }
  }
}
