import { NgModule } from '@angular/core';
import { DIComponent } from './DI-compare.component';
import { SendMessage } from './interface/SendMessage';
import { MSGserviceService } from './service/MSGService.service';
import { DIInjectService } from './components/DIInject/DIInject.service';


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
    MSGserviceService,
  ]
})
export class DICompareModeModule { }
