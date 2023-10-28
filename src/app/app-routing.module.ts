import { NgModule } from '@angular/core';
import {ManagePageComponent}  from './manage-page/manage-page.component';
import {LandingPageComponent}  from './landing-page/landing_page.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // Define your routes here
  { path: '', component: LandingPageComponent }, // Default route (empty path)
  { path: 'manage-page', component: ManagePageComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

