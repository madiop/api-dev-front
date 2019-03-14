import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
// import { Response } from '@angular/http';
// import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class PostRepository {

  constructor(private httpClient: HttpClient) {}

  getList() {
    let url = 'http://127.0.0.1:8000/api/posts';

    return this.httpClient
          .get<any[]>(url);
          // .map((data: HttpResponse) => data.json());
  }
}
