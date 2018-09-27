import { MSGserviceNoInjectService } from '../../service/MSGService-noInject.service';

export class noDIService {

  msgService: MSGserviceNoInjectService;

  constructor() {
    this.msgService = new MSGserviceNoInjectService();
  }

  getMessage() {
    return this.msgService.sendMessage();
  }
}
