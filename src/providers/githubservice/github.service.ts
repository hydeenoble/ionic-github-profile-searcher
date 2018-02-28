import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from'rxjs/Observable';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

/*
  Generated class for the GithubserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';
import {Repository} from "../../models/repository.interface";
import {REPOSITORY_LIST} from "../../mocks/repository.mocks";

@Injectable()
export class GithubserviceProvider {

  private baseUrl: string = "https://api.github.com/users";

  constructor(private http: HttpClient) {

  }

  getUserinfo(username: string): Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)
      .do((data) => console.log(data))
      .map((data) => data)
      .catch((error) => Observable.throw(error || "Server error."));
  }

  getRepoInfo(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/repos`)
      .do((data) => console.log(data))
      .map((data) => data)
      .catch((error) => Observable.throw(error || "Server error."));
  }

  mockGetUserInfo(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0])
  }

  mockGetRepoInfo(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter( repositories => repositories.owner.name === username));
  }
}
