import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirpodsComponent } from './pages/airpods/airpods.component';
import { DondeComprarComponent } from './pages/donde-comprar/donde-comprar.component';
import { IpadComponent } from './pages/ipad/ipad.component';
import { IphoneComponent } from './pages/iphone/iphone.component';
import { MacComponent } from './pages/mac/mac.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { TvyCasaComponent } from './pages/tvy-casa/tvy-casa.component';
import { WatchComponent } from './pages/watch/watch.component';
import { SoloenappleComponent } from './pages/soloenapple/soloenapple.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'', component:MainComponent},
      {path:'airpods', component:AirpodsComponent},
      {path:'donde-comprar', component:DondeComprarComponent},
      {path:'ipad', component:IpadComponent},
      {path:'iphone', component:IphoneComponent},
      {path:'mac', component:MacComponent},
      {path:'soloenapple',component:SoloenappleComponent},
      {path:'soporte', component:SoporteComponent},
      {path:'tvycasa', component:TvyCasaComponent},
      {path:'watch', component:WatchComponent},
      {path:'**', redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppleRoutingModule { }
