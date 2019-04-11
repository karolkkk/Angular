import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostingService {
  _url = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) {}
    postIt(postData) {
       return this._http.post<any>(this._url, postData);
    }
    getPosts() {
      return this._http.get<any>(this._url);
    }
   }

