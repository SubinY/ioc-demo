import { Injectable } from "@angular/core";
import { CommonService } from "./common.service";


@Injectable()
export class AuthService {
  constructor(
    private commonService: CommonService,
    private isAuthorized: boolean) { }

  getUser() {
    let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.commonService.log(`Getting user for ${auth} user.`);
    return this.isAuthorized;
  }
}
