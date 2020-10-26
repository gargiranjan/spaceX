import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getData(year?, launch?, landing?): Observable<any> {
    if(launch || landing || year) {
      return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${landing}&launch_year=${year}`).pipe(map(res => {
        return res;
      }));
    } else{
      return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100`).pipe(map(res => {
        return res;
      }));
}
  }
}
