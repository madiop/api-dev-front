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
