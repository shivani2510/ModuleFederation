import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';

const routes: Routes = [
  { path: 'child', component: Comp1Component },
  { path: '', pathMatch: 'full', redirectTo: 'child' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
