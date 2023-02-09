import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './apple/pages/main/main.component';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
