import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthenticationService {
  helper = new JwtHelperService();

  constructor(private httpClient: HttpClient) {}

  authenticate(user: any) {
      let url     = 'http://127.0.0.1:8000/api/login_check';
      let body     = new URLSearchParams();
      body.append('username', user.username);
      body.append('password', user.password);
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
      };

      return this.httpClient
              .post<any[]>(url, body.toString(), httpOptions);
  }

  public getToken(): string {
    return localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    const token = this.getToken();
    return !this.helper.isTokenExpired(token);
  }
}
