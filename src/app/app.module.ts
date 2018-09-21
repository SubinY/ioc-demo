import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectInjectModeModule } from './select-inject-mode/select-inject-mode.module';
import { ShareModule } from './share/share.module';
import { UseFactoryComponent } from './provider-performance/provider-performance.component';
import { ProviderPerformanceModule } from './provider-performance/provider-performance.module';

@NgModule({
  declarations: [
    AppComponent,
    UseFactoryComponent
  ],
  imports: [
    BrowserModule,
    SelectInjectModeModule,
    ShareModule,
    ProviderPerformanceModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
