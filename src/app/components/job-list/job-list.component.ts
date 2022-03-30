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

  constructor() { }

  ngOnInit(): void {
    this.jobList = jobs;
  }

}
