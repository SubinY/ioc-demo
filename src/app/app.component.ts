import { Component } from '@angular/core';
import { InfoService } from './shareServiceDemo/service/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InfoService]
})
export class AppComponent {
  title = 'IOC-demo';

  persons = [];

  constructor(private infoService: InfoService) {
    this.persons = this.infoService.persons;
  }
}
