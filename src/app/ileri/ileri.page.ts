import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ileri',
  templateUrl: './ileri.page.html',
  styleUrls: ['./ileri.page.scss'],
})
export class IleriPage implements OnInit {


  slideOpts = {
    initalSlide: 1,
    speed: 400
   };


  constructor() { }

  ngOnInit() {
  }

}
