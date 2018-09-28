import { Injectable } from "../../../../node_modules/@angular/core";

@Injectable()
export class InfoService {
  persons = [
    { id: 1, name: '张三', age: '23' },
    { id: 2, name: '李四', age: '33' }
  ];

  saveInfo(who) {
    const person = this.persons.find(p => p.id === who.id);
    who = Object.assign(person, who);
  }
}
