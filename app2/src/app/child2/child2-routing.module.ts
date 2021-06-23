import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [{ path: 'child', component: Comp2Component },
{ path: '', pathMatch: 'full', redirectTo: 'child' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child2RoutingModule { }
