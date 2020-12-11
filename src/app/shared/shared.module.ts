import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormItemComponent} from './components/form-item/form-item.component';
import {ControlMessagesComponent} from './components/control-messages.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FormItemComponent,
    ControlMessagesComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [NgZorroAntdModule, FormItemComponent, ControlMessagesComponent]
})
export class SharedModule { }
