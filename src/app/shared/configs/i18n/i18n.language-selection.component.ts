import { Component, Inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {TranslationService} from '@shared/services/translation.service';
import { SystemSettingsService } from '@shared/services/system-settings.service';

@Component({
  selector: 'app-i18n-language-selection',
  template: `
      <a nz-dropdown nzTrigger="click" nzPlacement="bottomRight" [nzDropdownMenu]="menu" style="cursor: pointer; min-width: unset">
          <span *ngIf="showLangText">
              <i nz-icon nzType="global" style="margin-right: 5px"></i> {{i18n.current.name}}
          </span>
          <i *ngIf="!showLangText" nz-icon nzType="global"></i>
      </a>
      <nz-dropdown-menu #menu="nzDropdownMenu" class="width-sm">
          <ul nz-menu>
              <li nz-menu-item *ngFor="let item of langs" [nzSelected]="item.code === i18n.current.code" (click)="change(item.code)">
                  {{ item.text }}
              </li>
          </ul>
      </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class I18nLanguageSelectionComponent {

  @Input() showLangText = true;

  get langs() {
    return this.i18n.getLangs();
  }

  constructor(
    private readonly translation: TranslationService,
    private readonly settings: SystemSettingsService,
    public i18n: TranslationService,
    @Inject(DOCUMENT) private readonly doc: any,
  ) {}

  change(lang: string) {
    const spinEl = this.doc.createElement('div');
    spinEl.setAttribute('class', `page-loading ant-spin ant-spin-lg ant-spin-spinning`);
    spinEl.innerHTML = `<span class="ant-spin-dot ant-spin-dot-spin"><i></i><i></i><i></i><i></i></span>`;
    this.doc.body.appendChild(spinEl);
    this.i18n.use(lang);
    this.settings.user.language = lang;
    setTimeout(() => this.doc.location.reload());
  }
}
