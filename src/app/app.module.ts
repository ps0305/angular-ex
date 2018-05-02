import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {firstComponent} from "./first.component";


@NgModule({
  declarations: [
    firstComponent,AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [firstComponent]
})
export class AppModule { }
