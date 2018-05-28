// deleteBook.service.ts
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import PostService from './post.service';
import { apiUrl, getAuthHeaders } from '../constants';
import { Observable } from 'rxjs';

@Injectable()
export default class DeleteBookService extends PostService {
  url = apiUrl + 'deleteBook.php';

  callService(item: Object): Observable<void> {
    // console.log(item);
    this.headers = getAuthHeaders();
    return super.callService(item);
  }
}
