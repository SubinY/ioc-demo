import { NgModule } from '@angular/core';
import { DIComponent } from './DI-compare.component';
import { MSGserviceService } from './service/MSGService.service';


@NgModule({
  declarations: [
    DIComponent
  ],
  exports: [
    DIComponent
  ],
  imports: [
  ],
  providers: [
    MSGserviceService
  ]
})
export class DICompareModeModule { }
