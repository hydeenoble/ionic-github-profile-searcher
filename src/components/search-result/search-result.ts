import {Component, Input} from '@angular/core';
import { User } from '../../models/user.interface';
/**
 * Generated class for the SearchResultComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-result',
  templateUrl: 'search-result.html'
})
export class SearchResultComponent {

  // text: string;

  @Input() user: User;

  constructor() {
    // console.log('Hello SearchResultComponent Component');
    // this.text = 'Hello World';
  }

}
