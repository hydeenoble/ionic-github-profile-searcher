import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GithubserviceProvider } from  '../../providers/githubservice/github.service';

import { User } from "../../models/user.interface";
import {Repository} from "../../models/repository.interface";

/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/results/:username'
})

@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {

  username: string;

  user: User;
  repositories: Repository[];

  constructor(private githubService: GithubserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  getUserInfo(): void {
    this.githubService.getUserinfo( this.username)
      .subscribe((data: User) => this.user = data);

    this.githubService.getRepoInfo(this.username)
      .subscribe((data: Repository[]) => this.repositories = data)

    // this.githubService.mockGetUserInfo(this.username)
    //   .subscribe((data: User) => this.user = data);
    //
    // this.githubService.mockGetRepoInfo(this.username)
    //   .subscribe((data: Repository[]) => this.repositories = data)
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username')
    if(this.username){
      this.getUserInfo();
    }
  }

}
