// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

/*
  Generated class for the GithubserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';

@Injectable()
export class GithubserviceProvider {

  constructor() {
    console.log('Hello GithubserviceProvider Provider');
  }

  mockGetUserInfo(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0])
  }

}
