import { Component, Input } from '@angular/core';

/**
 * Generated class for the Loader component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'loader',
  templateUrl: 'loader.html'
})
export class Loader {

  @Input() text: string;
}
