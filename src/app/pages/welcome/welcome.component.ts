import {Component, OnInit} from '@angular/core';
import {ModalExampleService} from './modal-example/modal-example.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private modalExampleService: ModalExampleService
  ) {
  }

  ngOnInit() {
  }

  public createModal() {
    this.modalExampleService.create();
  }

}
