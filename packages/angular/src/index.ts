import { Directive, ElementRef, NgModule } from '@angular/core';


@Directive({
  selector: 'ion-checkbox'
})
export class BooleanInput {

  constructor(element: ElementRef) {
    console.log('BooleanInput', element);
  }

}


@NgModule({
  declarations: [
    BooleanInput
  ],
  exports: [
    BooleanInput
  ],
  providers: [

  ]
})
export class IonicModule {
  constructor() {
    console.log('IonicModule');
  }
}
