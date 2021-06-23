import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Child2RoutingModule } from './child2-routing.module';
import { Comp2Component } from './comp2/comp2.component';


@NgModule({
  declarations: [
    Comp2Component
  ],
  imports: [
    CommonModule,
    Child2RoutingModule
  ]
})
export class Child2Module { }
