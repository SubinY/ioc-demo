import { Component } from '@angular/core';
import { AuthServiceProvider } from '../share/services/auth-factory.provider';
import { AuthService } from '../share/services/auth.service';
import { UserAuth } from '../config/user.config';



@Component({
  selector: 'useFactory',
  template: `
    <span>asdf</span>
    <button (click)="changeAuth($event)">!AuthValue</button>
  `,
  providers: [AuthServiceProvider]
})
export class UseFactoryComponent {
  name = 'UseFactory';

  constructor(private authService : AuthService) {
  }

  changeAuth($event) {

  }
}
