import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class WebapiService {

  API_KEY = 'AIzaSyBzUAyJf7Hkzv44Cj4c9t0xH6vg84SdtyA1';
  constructor(private _http: Http) { }

  getList(id: string): Observable<any> {
    console.log(id);
    return this._http.get(this.getUrl(id)).pipe(
      map ((res: any) => res.json())
      );
  }

  getUrl(id: string) {
    console.log(id);
    return 'https://sheets.googleapis.com/v4/spreadsheets/' + id +
    '/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=' +
    this.API_KEY;
  }
}
