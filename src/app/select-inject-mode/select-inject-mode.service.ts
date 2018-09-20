import { Injectable } from "../../../node_modules/@angular/core";

@Injectable({
  providedIn: 'root'
})
export class InjectModeService {
  serviceMode = 'sadf';
  constructor() {
  }
}
