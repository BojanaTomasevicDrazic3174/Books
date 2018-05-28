// getPorudzbina.service.ts
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { apiUrl, getAuthHeaders } from '../constants';


@Injectable()
export default class GetPorudzbinaService {
  protected url = apiUrl + 'getPorudzbine.php';

  constructor(protected http: Http) { }

  getPorudzbine(): Observable<Object[]> {
    return this.http.get(this.url, { headers: getAuthHeaders() })
      .map(this.extractData);
  }
  protected extractData(res: Response) {
    console.log(res);


    let obj = JSON.parse(res['_body']);
    return obj.porudzbina;
  }

}