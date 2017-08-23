import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwimPage } from './swim';

@NgModule({
  declarations: [
    SwimPage,
  ],
  imports: [
    IonicPageModule.forChild(SwimPage),
  ],
})
export class SwimPageModule {}
