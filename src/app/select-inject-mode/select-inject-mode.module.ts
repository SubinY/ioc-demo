import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProviderInComponent, NgModuleProviderComponent, ViewProviderComponent } from './select-inject-mode.component';
import { InjectMode2Service } from './select-inject-mode2.service';
import { InjectModeService } from './select-inject-mode.service';


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
    // {provide: InjectMode2Service, useClass: InjectModeService} // useClass防止组件污染，如果是三方组件必须遵循初始提供商的规范
  ]
})
export class SelectInjectModeModule { }
