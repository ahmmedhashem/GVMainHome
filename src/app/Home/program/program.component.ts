import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  programs:any = [
    {
      img : "./assets/img/prog1.png",
      title : "Painting and decorating",
    },
    {
      img : "./assets/img/prog2.png",
      title : "Programming",
    },
    {
      img : "./assets/img/prog3.png",
      title : "Sport Tournaments",
    },
    {
      img : "./assets/img/prg4.png",
      title : "Music",
    },
    {
      img : "./assets/img/prog1.png",
      title : "Painting and decorating",
    },
    {
      img : "./assets/img/prog2.png",
      title : "Programming",
    },
    {
      img : "./assets/img/prog3.png",
      title : "Sport Tournaments",
    },
    {
      img : "./assets/img/prg4.png",
      title : "Music",
    },

  ]

  programlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<div class="car-button-right"> <img src="./assets/img/prev.png">  </div>', '<div class="car-button-left"> <img src="./assets/img/next.png">  </div>'],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
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
