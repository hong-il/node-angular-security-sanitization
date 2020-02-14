import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InnerHtmlBindingComponent } from './inner-html-binding.component';
import { BypassSecurityComponent } from './bypass-security.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerHtmlBindingComponent,
    BypassSecurityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
