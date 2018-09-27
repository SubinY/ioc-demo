import { LogserviceService } from "./log.service";

export class MSGserviceNoInjectService {
  constructor(LogserviceService?: LogserviceService) { }

  printMessage(): void {
    console.log('Print Message Success');
  }

  sendMessage() {
    return `Send Message Success`;
  }
}
