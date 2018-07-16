import { Injectable } from '../../node_modules/@angular/core';
import { Http, Headers, Response } from '../../node_modules/@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServerService {
  constructor(private http: Http) {

  }

  storeServers(servers: any[]) {
    const headers = new Headers({ 'Content-type': 'application/json' });
    // return this.http.post('https://angular-course-udemy.firebaseio.com/data.json', servers, { headers: headers });
    return this.http.put('https://angular-course-udemy.firebaseio.com/data.json', servers, { headers: headers });
  }

  getServers() {
    return this.http.get('https://angular-course-udemy.firebaseio.com/')
      .map((response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      })
      .catch((error: Response) => {
        console.log(error);
        return Observable.throw('Something went wrong!!');
      }
      );
  }

  getAppName() {
    return this.http.get('https://angular-course-udemy.firebaseio.com/appName.json')
      .map((response: Response) => {
        return response.json();
      });
  }
}
