import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private router: Router) { }   /*(private router: Router)*/

  girisOrta(){
    this.router.navigate(['/orta']);
  }
  girisZor(){
    this.router.navigate(['/ileri']);
  }
  girisTemel(){
    this.router.navigate(['/temel']);
  }

}
