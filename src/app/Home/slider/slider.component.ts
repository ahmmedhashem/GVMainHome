import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sponsers:any = [
    {
      img : "./assets/img/Original on Transparent01 1.png",
    },
    {
      img : "./assets/img/Original on Transparent01 1.png",
    },
    {
      img : "./assets/img/Original on Transparent01 1.png",
    },
  ];

  sponserlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

 link:number=1;

  constructor() { }
  change(num:number){
    this.link=num;
  }

  ngOnInit(): void {


  }

}
