import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TypeList } from './type-list';

@NgModule({
  declarations: [
    TypeList,
  ],
  imports: [
    IonicPageModule.forChild(TypeList),
  ],
  exports: [
    TypeList
  ]
})
export class TypeListModule {}
