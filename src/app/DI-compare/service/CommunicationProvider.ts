import { environment } from "../../../environments/environment";
import { forwardRef } from "@angular/core";
import { MSGserviceService } from "./MSGService.service";
import { SendMessage } from "../interface/SendMessage";
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
