import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'co',loadChildren: ()=> import  ('./apple/apple.module').then(m=>m.AppleModule)},
  {path:'auth', loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'**',redirectTo:'co'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
