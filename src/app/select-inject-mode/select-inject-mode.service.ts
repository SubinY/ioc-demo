import { Injectable } from "@angular/core";
import { CommonService } from "../share/services/common.service";

@Injectable({
  providedIn: 'root'
})
export class InjectModeService extends CommonService {
  serviceMode = 'sadf';
  constructor() {
    super();
  }

  log() {
    super.log();
  }
}
