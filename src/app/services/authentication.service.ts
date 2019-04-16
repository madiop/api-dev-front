import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BASE_API_URL } from '../app.globals';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class AuthenticationService {
  private currentStateSubject: BehaviorSubject<boolean>;
  public currentState: Observable<boolean>;
  helper = new JwtHelperService();

  constructor(private httpClient: HttpClient) {
    this.emitCurrentState();
  }

  // public get currentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }

  emitCurrentState() {
    this.currentStateSubject = new BehaviorSubject<boolean>(this.loggedIn());
    this.currentState = this.currentStateSubject.asObservable();
  }

  authenticate(user: any) {
      let url     = BASE_API_URL + 'login_check';

      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }) //x-www-form-urlencoded
      };

      return this.httpClient
                 .post<any[]>(url, user, httpOptions);
  }

  public getToken(): string {
    return localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
    this.currentStateSubject.next(null); // vérifie que l'état a bien changer
    // this.emitCurrentState();
  }

  loggedIn() {
    const token = this.getToken();
    return !this.helper.isTokenExpired(token);
  }
}
