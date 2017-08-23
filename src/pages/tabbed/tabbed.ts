import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabbedPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-tabbed',
  templateUrl: 'tabbed.html'
})
export class TabbedPage {

  welcomeRoot = 'WelcomePage'
  churchRoot = 'ChurchPage'
  restaurantRoot = 'RestaurantPage'
  swimRoot = 'SwimPage'
  lostRoot = 'LostPage'


  constructor(public navCtrl: NavController) {}

}
