import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  isAuth: boolean;
  slideImages = [
    '../../assets/img/projects/project-home-1.jpg',
    '../../assets/img/projects/project-home-2.jpg',
    '../../assets/img/projects/project-home-3.jpg'
  ];

  mySlideOptions={items: 1,  dots: false, animateOut: 'slideOutDown', animateIn: 'flipInX', loop: true, autoplay: true, nav: false};
  // mySlideOptions = {items: 1, dots: false, animateOut: 'slideOutDown', animateIn: 'flipInX', autoplay:true, loop: true, nav: false};
  // slideTransition: 'fade', 

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.authService.currentState.subscribe(x => this.isAuth = x);
    // this.isAuth = this.authService.loggedIn();
  }

  onSignOut() {
    this.authService.logout();
    this.router.navigate(["home"]);
  }
}
