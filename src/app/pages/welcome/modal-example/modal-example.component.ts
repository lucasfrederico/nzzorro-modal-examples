import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjetoModel} from '../../../shared/model/projeto.model';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
})
export class ModalExampleComponent implements OnInit {

  public form: FormGroup | undefined;

  @Input()
  public entity: ProjetoModel | undefined;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: [this.entity?.name, [Validators.required]],
      description: [this.entity?.description, [Validators.required]]
    });
  }

}
