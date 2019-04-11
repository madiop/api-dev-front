import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  postImages = [
    '../../../assets/img/blog/blog-image-1.jpg',
    '../../../assets/img/blog/blog-image-1.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
