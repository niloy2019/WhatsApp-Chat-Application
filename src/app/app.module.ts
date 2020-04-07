import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YouComponent } from './you/you.component';
import { SomeoneComponent } from './someone/someone.component';

@NgModule({
  declarations: [
    AppComponent,
    YouComponent,
    SomeoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
