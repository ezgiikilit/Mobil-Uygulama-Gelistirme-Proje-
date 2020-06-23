import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temel',
  templateUrl: './temel.page.html',
  styleUrls: ['./temel.page.scss'],
})
export class TemelPage implements OnInit {


  slideOpts = {
    initalSlide: 1,
    speed: 400
   };

  constructor() { }

  ngOnInit() {
  }

}
