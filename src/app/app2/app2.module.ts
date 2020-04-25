import { NgModule } from '@angular/core';
import { App2Component } from './app2.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [App2Component],
  imports:  [
    BrowserModule
  ],
  bootstrap: [App2Component]
})
export class App2Module { }
