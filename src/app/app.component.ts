import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'Homepage';

  /**
   *
   */
  constructor(private route:Router) {
  }
  goToHome(){
    this.route.navigateByUrl('/home');
  }
}
