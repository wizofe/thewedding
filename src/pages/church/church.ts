import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
  FormGroup,
  FormControl

} from '@angular/forms';

/**
 * Generated class for the ChurchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-church',
  templateUrl: 'church.html',
})
export class ChurchPage {


  langs;
  langForm;

  constructor() {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChurchPage');
  }

}
