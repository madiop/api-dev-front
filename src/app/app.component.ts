import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-dev-front';
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  hasAuthToken() {
    return localStorage.getItem('id_token') !== null;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['home']);
  }
}
