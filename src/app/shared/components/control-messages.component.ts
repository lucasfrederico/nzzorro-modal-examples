import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {ValidationService} from '../services/validation.service';

@Component({
  selector: 'app-control-messages',
  template: `
    <div class="form-error" *ngIf="errorMessage != null">{{ errorMessage }}</div>
  `,
  styles: [':host * {color: #de4436; font-size: 12px !important; margin-top: 5px; }'],
})
export class ControlMessagesComponent {
  @Input() control: AbstractControl | undefined;

  constructor(private readonly translate: TranslateService) {
  }

  get errorMessage() {
    if (this.control) {
      if (this.control.dirty) {
        for (const propertyName in this.control.errors) {
          if (this.control.errors.hasOwnProperty(propertyName)) {
            return ValidationService.getValidatorErrorMessage(
              propertyName,
              this.control.errors[propertyName],
              this.translate,
            );
          }
        }
      }
    }
    return null;
  }
}
