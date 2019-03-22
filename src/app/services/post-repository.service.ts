import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../app.globals';
// import { Response } from '@angular/http';
// import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class PostRepository {

  constructor(private httpClient: HttpClient) {}

  getList() {
    let url = BASE_API_URL + 'posts';

    return this.httpClient
          .get<any[]>(url);
          // .map((data: HttpResponse) => data.json());
  }
}
