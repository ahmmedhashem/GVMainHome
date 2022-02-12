import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {


  testimonails:any = [
    {
      img : "./assets/img/Ellipse 14.png",
      name : "Ali Albloushi",
      disc : '"Overall, a great session with superb interaction from all participants. A real enjoyable and educational experience. A true delight to the training arena !"'
    },
    {
      img : "./assets/img/Ellipse 14.png",
      name : "Ali Albloushi",
      disc : '"Overall, a great session with superb interaction from all participants. A real enjoyable and educational experience. A true delight to the training arena !"'
    },
    {
      img : "./assets/img/Ellipse 14.png",
      name : "Ali Albloushi",
      disc : '"Overall, a great session with superb interaction from all participants. A real enjoyable and educational experience. A true delight to the training arena !"'
    },
    {
      img : "./assets/img/Ellipse 14.png",
      name : "Ali Albloushi",
      disc : '"Overall, a great session with superb interaction from all participants. A real enjoyable and educational experience. A true delight to the training arena !"'
    },

  ]


  testimonialOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<div class="car-button-right"> <img src="./assets/img/Vector-3.png">  </div>', '<div class="car-button-left"> <img src="./assets/img/Vector.png">  </div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }
}
