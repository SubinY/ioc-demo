import { Injectable } from '@angular/core';
import { MSGserviceService } from '../../service/MSGService.service';
import { SendMessage } from '../../interface/SendMessage';

@Injectable()
export class DIInjectService {

  private msgService: SendMessage;

  constructor(inmsgService: SendMessage) {
    this.msgService = inmsgService;
  }

  getMessage() {
    return this.msgService.sendMessage();
  }
}
