import { Component, Input } from "@angular/core";
import { Info } from "./info";
import { InfoService } from "./service/info.service";

@Component({
  selector: 'single-info',
  template: `
    <form>
      <p><label>名字：</label>{{name}}</p>
      <p><label>修改名字：</label><input name="name" [(ngModel)]="infoReturn.name"></p>
      <p><label>年龄：</label><input name="age" [(ngModel)]="infoReturn.age"></p>
      <button (click)="save()">保存</button>
      <button (click)="restore()">还原</button>
    </form>
  `,
  styles: [`
    form {
      padding: 10px;
      border: 1px solid #ccc;
      width: 300px;
      float: left;
    }
  `
  ],
  providers: [
    InfoService
  ]
})
export class SingleInfoComponent {

  private originalInfo: Info;
  private currentInfo: Info;

  name = 123;

  constructor(private infoService: InfoService) { }

  @Input() set infoReturn (who: Info) {
    this.originalInfo = who;
    this.currentInfo  = {...who};
    this.name = 123;
  }

  get infoReturn (): Info {
    return this.currentInfo;
  }

  restore() {
    this.infoReturn = this.originalInfo;
  }

  save() {
    this.infoReturn = this.currentInfo;
    this.infoService.saveInfo(this.currentInfo);
    alert(JSON.stringify(this.infoService.persons));
  }
}
