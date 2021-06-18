import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { Comp1Component } from './comp1/comp1.component';


@NgModule({
  declarations: [
    Comp1Component
  ],
  imports: [
    CommonModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
