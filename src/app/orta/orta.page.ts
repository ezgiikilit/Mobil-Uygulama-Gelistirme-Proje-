import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orta',
  templateUrl: './orta.page.html',
  styleUrls: ['./orta.page.scss'],
})
export class OrtaPage implements OnInit {

  slideOpts = {
    initalSlide: 1,
    speed: 400

   };

  constructor() { }

  ngOnInit() {
  }

}
