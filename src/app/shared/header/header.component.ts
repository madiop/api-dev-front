import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;
  
  constructor(@Inject(DOCUMENT) document, 
              private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.isAuth = this.authService.loggedIn();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 55) {
       let element = document.getElementById('header');
       element.classList.add('sticky-header-active');
     } else {
      let element = document.getElementById('header');
        element.classList.remove('sticky-header-active'); 
     }
  }

  onSignOut() {
    this.authService.logout();
    this.router.navigate(["home"]);
  }

}
