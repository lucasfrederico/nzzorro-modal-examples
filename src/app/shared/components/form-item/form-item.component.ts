import {Component, Input, OnInit, Optional} from '@angular/core';
import {AbstractControl, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
})
export class FormItemComponent implements OnInit {
  @Input() formItemClass: string | string[] | { [klass: string]: any; } | undefined;
  @Input() label: string | undefined;
  @Input() required = false;
  @Input() controlName: string | undefined;

  control: AbstractControl | null | undefined;

  constructor(@Optional() private readonly form: FormGroupDirective) {
  }

  ngOnInit(): void {
    if (this.form && this.controlName) {
      this.control = this.form.control.get(this.controlName);
    }
  }
}
