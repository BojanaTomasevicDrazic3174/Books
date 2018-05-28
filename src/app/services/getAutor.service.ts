import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { apiUrl, getAuthHeaders } from '../constants';
import Autor from '../model/autor';

@Injectable()
export default class GetAutorService {
  protected url = apiUrl + 'getautori.php';

  constructor(protected http: Http) { }

  getAutors(): Observable<Autor[]> {
    return this.http.get(this.url, { headers: getAuthHeaders() })
      .map(this.extractData);
  }
  protected extractData(res: Response) {
    let obj = JSON.parse(res['_body']);
    return obj.authors;
  }

}
