import { Injectable } from "@angular/core";


@Injectable()
export class CommonService {
  serviceMode = 'sadf';
  constructor() {
  }

  log(logName?) {
    console.log(logName || 'common');
  }
}
