import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppleRoutingModule } from './apple-routing.module';

import { ComponentsComponent } from './components/components.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { SoloenappleComponent } from './pages/soloenapple/soloenapple.component';


@NgModule({
  declarations: [
  
    SoloenappleComponent
  ],
  imports: [
    CommonModule,
    AppleRoutingModule
  ]
})
export class AppleModule { }
