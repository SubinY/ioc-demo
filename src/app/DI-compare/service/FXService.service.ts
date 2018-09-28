import { Injectable } from "@angular/core";
import { IPrintable } from "../interface/IPrintable";
import { SendMessage } from "../interface/SendMessage";

@Injectable()
export class FXserviceService implements IPrintable, SendMessage {
  constructor() { }

  printMessage() {
    console.log(123);
  }

  sendMessage() {
    return 'has Inject provider msg from FX words';
  }
}
