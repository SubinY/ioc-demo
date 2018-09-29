import { Component } from '@angular/core';
import { InfoService } from './shareServiceDemo/service/info.service';
import { SimpleDI } from './simple-DI/simple-DI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InfoService]
})
export class AppComponent {
  title = 'IOC-demo';

  persons = [];

  simpleDi = new SimpleDI;

  constructor(private infoService: InfoService) {
    this.persons = this.infoService.persons;

    this.simpleDi.module()
      .factory("minus", function () {
        return function (a, b) {
          return a - b
        }
      })
      .factory("plus", function () {
        return function (a, b) {
          return a + b
        }
      })
      .factory("complex", function (minus, plus) {
        return function (a, b) {
          return minus(a, b) + plus(a, b)
        }
      })
      .injector.invoke(function (minus, complex) {
        console.log(minus(3, 1));
        console.log(complex(3, 1));
      });
    console.log(window['cache'])

    this.simpleDi.module()
      .injector.invoke(function (minus, plus, complex) {
        console.log(minus(3, 1));
        console.log(plus(3, 1));
        console.log(complex(3, 1));
      });

  }
}
