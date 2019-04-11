import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class CarouselBasicComponent implements OnInit {

  mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  slideImages = [
    '../../../assets/img/blog/blog-image-1.jpg',
    '../../../assets/img/blog/blog-image-1.jpg'
  ];

  myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
  
  mySlideOptions={items: 1};//, dots: true, nav: false};
  myCarouselOptions={items: 3, dots: true, nav: true};
  constructor() { }

  ngOnInit() {
  }

}
