// getbook.service.ts
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { apiUrl, getAuthHeaders } from '../constants';
import Book from '../model/book';

@Injectable()
export default class BookService {
  protected url = apiUrl + 'getknjige.php';

  constructor(protected http: Http) { }

  getBooks(): Observable<Book[]> {
    return this.http.get(this.url, { headers: getAuthHeaders() })
      .map(this.extractData);
  }
  protected extractData(res: Response) {
    console.log(res);
    
    
    let obj = JSON.parse(res['_body']);
    return obj.books;
  }

}
