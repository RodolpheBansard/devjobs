import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobListComponent} from "./components/job-list/job-list.component";
import {JobDetailsComponent} from "./components/job-details/job-details.component";

const routes: Routes = [
  {path: 'job-list' , component: JobListComponent},
  {path: 'job/:id', component: JobDetailsComponent},
  {path: '**', redirectTo:"job-list"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
