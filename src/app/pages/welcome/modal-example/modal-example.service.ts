import {Injectable} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {ModalExampleComponent} from './modal-example.component';
import {FormGroup} from '@angular/forms';
import {ReactiveFormsUtils} from '../../../shared/utils/reactive-forms.utils';

@Injectable({
  providedIn: 'root'
})
export class ModalExampleService {

  constructor(
    private modalService: NzModalService,
    private messageService: NzMessageService
  ) {
  }

  /**
   * Função responsável pela criação do modal.
   *
   * Dica: caso precisar enviar parâmetros para {@link ModalExampleComponent},
   * é possível utilizar o parâmetro {@link ModalOptions.nzComponentParams}.
   */
  public create(): void {
    this.modalService.create({
      nzTitle: `Título`,
      nzContent: ModalExampleComponent,
      nzFooter: [
        {
          label: 'Cancelar',
          shape: 'default',
          onClick: () => {
            this.modalService.closeAll();
          },
        },
        {
          label: 'Salvar',
          type: 'primary',
          /**
           * Disparo do evento de clique do botão
           * @param componentInstance Instância do componente {@link ModalExampleComponent}
           */
          onClick: componentInstance => {
            this.submitForm(componentInstance.form);
          },
        },
      ],
    });
  }

  private submitForm(form: FormGroup): void {
    if (!ReactiveFormsUtils.eval(form)) {
      return;
    }

    this.messageService.success('Salvo com sucesso');
    this.modalService.closeAll();
  }
}
