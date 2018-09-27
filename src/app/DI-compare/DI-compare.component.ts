import { Component } from '@angular/core';
import { noDIService } from './components/no-DI/no-DI.service';
import { hasDIService } from './components/has-DI/has-DI.service';
import { MSGserviceNoInjectService } from './service/MSGService-noInject.service';
import { LogserviceService } from './service/log.service';
import { DIInjectService } from './components/DIInject/DIInject.service';

@Component({
  selector: 'DI-comp',
  templateUrl: `./DI.component.html`,
  viewProviders: [DIInjectService]
})
export class DIComponent {

  noDIService: noDIService;
  hasDIService: hasDIService;

  constructor(public DIInjectService: DIInjectService) {
    this.noDIService = new noDIService();
    this.hasDIService = new hasDIService(new MSGserviceNoInjectService); // 构造函数的形参就是es6中class的构造器参数
  }

  get noDImsg() {
    return this.noDIService.getMessage();
  }

  get hasDImsg() {
    return this.hasDIService.getMessage();
  }

  get DIInjectmsg() {
    return this.DIInjectService.getMessage();
  }
}
