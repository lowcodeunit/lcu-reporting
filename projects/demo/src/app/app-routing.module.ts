import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './controls/home/home.component';
import { PowerBIViewTestComponent } from './controls/power-bi-view-test/power-bi-view-test.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: PowerBIViewTestComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
