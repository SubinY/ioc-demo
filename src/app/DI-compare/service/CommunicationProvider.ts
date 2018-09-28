import { environment } from "src/environments/environment";
import { forwardRef } from "@angular/core";
import { MSGserviceService } from "src/app/DI-compare/service/MSGService.service";
import { SendMessage } from "src/app/DI-compare/interface/SendMessage";
import { FXserviceService } from "./FXService.service";

export let CommunicationProvider = {
  provide: SendMessage,
  useClass: environment.production ? environment['CommunicationService'] : MSGserviceService
  // useFactory: forwardRef(() => {
  //   if(environment.production) {
  //     return new (environment['CommunicationService'])
  //   } else {
  //     return new MSGserviceService
  //   }
  // })
}
