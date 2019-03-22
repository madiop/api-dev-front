import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../app.globals';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }
  
  register(user: any) {
    let url     = BASE_API_URL + 'register';
    // let body     = new URLSearchParams();

    let corps = {
      'email': user.email,
      'firstname': user.firstname,
      'lastname': user.lastname,
      'username': user.username,
      'password': user.password
    }
    let body = JSON.stringify(corps);
    // console.log(corps);
    // console.log();

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.httpClient
               .post<Message>(url, body, httpOptions);
  }
}
