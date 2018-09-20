import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProviderInComponent, NgModuleProviderComponent, ViewProviderComponent } from './select-inject-mode.component';
import { InjectMode2Service } from './select-inject-mode2.service';


@NgModule({
  declarations: [
    ProviderInComponent,
    NgModuleProviderComponent,
    ViewProviderComponent
  ],
  exports: [
    ProviderInComponent,
    NgModuleProviderComponent,
    ViewProviderComponent
  ],
  imports: [
  ],
  providers: [
    InjectMode2Service
  ]
})
export class SelectInjectModeModule { }
