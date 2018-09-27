import { MSGserviceNoInjectService } from '../../service/MSGService-noInject.service';

export class hasDIService {

  msgService: MSGserviceNoInjectService;

  constructor(msgService: MSGserviceNoInjectService) {
    this.msgService = msgService;
  }

  getMessage() {
    return this.msgService.sendMessage();
  }
}
