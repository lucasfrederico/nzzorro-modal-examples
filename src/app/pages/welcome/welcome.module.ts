import {NgModule} from '@angular/core';

import {WelcomeRoutingModule} from './welcome-routing.module';

import {WelcomeComponent} from './welcome.component';
import {SharedModule} from '../../shared/shared.module';
import {ModalExampleComponent} from './modal-example/modal-example.component';
import {ModalExampleService} from './modal-example/modal-example.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    WelcomeComponent,
    ModalExampleComponent
  ],
  entryComponents: [
    ModalExampleComponent
  ],
  exports: [
    WelcomeComponent
  ],
  providers: [
    ModalExampleService
  ]
})
export class WelcomeModule {
}
