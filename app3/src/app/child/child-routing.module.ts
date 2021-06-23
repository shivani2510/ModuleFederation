import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';

const routes: Routes = [
  { path: 'app3', component: Comp1Component },
  { path: '', pathMatch: 'full', redirectTo: 'app3' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
