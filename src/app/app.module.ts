import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectInjectModeModule } from './select-inject-mode/select-inject-mode.module';
import { ShareModule } from './share/share.module';
import { ProviderPerformanceModule } from './provider-performance/provider-performance.module';
import { DICompareModeModule } from './DI-compare/DI-compare.module';
import { SingleInfoComponent } from './shareServiceDemo/single-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleInfoComponent
  ],
  imports: [
    FormsModule,
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
