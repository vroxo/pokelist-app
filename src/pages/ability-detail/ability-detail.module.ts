import { AbilityDetail } from './ability-detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AbilityDetail,
  ],
  imports: [
    IonicPageModule.forChild(AbilityDetail),
  ],
  exports: [
    AbilityDetail
  ]
})
export class AbilityDetailModule {}
