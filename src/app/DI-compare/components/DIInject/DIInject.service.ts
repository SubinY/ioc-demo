import { Injectable } from '@angular/core';
import { MSGserviceService } from '../../service/MSGService.service';

@Injectable()
export class DIInjectService {

  private msgService: MSGserviceService;

  constructor(inmsgService: MSGserviceService) {
    this.msgService = inmsgService;
  }

  getMessage() {
    return this.msgService.sendMessage();
  }
}
