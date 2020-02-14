import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InnerHtmlBindingComponent } from './inner-html-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerHtmlBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
