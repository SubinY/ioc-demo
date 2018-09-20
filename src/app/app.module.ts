import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectInjectModeModule } from './select-inject-mode/select-inject-mode.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SelectInjectModeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
