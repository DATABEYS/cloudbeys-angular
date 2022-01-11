
import{ Component, OnInit,HostBinding } from '@angular/core';
import { withLatestFrom } from 'rxjs';
import * as AOS from 'aos';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { fadeInAnimation } from 'angular-animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  containerFlag:boolean=false;
  constructor() { }
  ngOnInit() {
    AOS.init();
  }
  value = true;
  value1:any;

  // changed() {
  //   this.value1 = this.value;
  // }
}
