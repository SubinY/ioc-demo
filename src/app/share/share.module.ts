import { NgModule } from '@angular/core';
import { CommonService } from './services/common.service';
import { AuthServiceProvider } from './services/auth-factory.provider';


@NgModule({
  declarations: [],
  exports: [],
  imports: [
  ],
  providers: [
    CommonService,
    AuthServiceProvider
  ]
})
export class ShareModule { }
