import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectInjectModeModule } from './select-inject-mode/select-inject-mode.module';
import { ShareModule } from './share/share.module';
import { ProviderPerformanceModule } from './provider-performance/provider-performance.module';
import { DICompareModeModule } from './DI-compare/DI-compare.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SelectInjectModeModule,
    ShareModule,
    // ProviderPerformanceModule,
    DICompareModeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
