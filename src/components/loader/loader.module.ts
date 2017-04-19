import { Loader } from './loader';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    Loader,
  ],
  imports: [
    IonicModule.forRoot(Loader),
  ],
  exports: [
    Loader
  ]
})
export class LoaderModule {}
