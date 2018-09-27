import { Injectable } from "@angular/core";

@Injectable()
export class MSGserviceService {
  constructor() { }

  sendMessage() {
    return 'has Inject provider msg';
  }
}
