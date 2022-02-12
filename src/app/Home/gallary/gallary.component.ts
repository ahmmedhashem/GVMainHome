import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {

  gallary:any = [
    {
      img : "./assets/img/Rectangle 271.png",
      title : "Dubai",
    },
    {
      img : "./assets/img/Rectangle 316.png",
      title : "Dubai",
    },
    {
      img : "./assets/img/Rectangle 314.png",
      title : "Dubai",
    },
    {
      img : "./assets/img/Rectangle 318.png",
      title : "Music",
    },
    {
      img : "./assets/img/Rectangle 317.png",
      title : "Dubai",
    },
    {
      img : "./assets/img/Rectangle 315.png",
      title : "Dubai",
    },
    {
      img : "./assets/img/Rectangle 319.png",
      title : "Dubai",
    },

  ]

  gallaryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1.25
      },
      400: {
        items: 1.25
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  constructor() { }

  ngOnInit(): void {
  }

}
