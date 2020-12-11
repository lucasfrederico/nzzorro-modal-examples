import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

import {registerLocaleData} from '@angular/common';

import {TranslateService} from '@ngx-translate/core';
import {DEFAULT_LANGUAGE, LANGS} from '../configs/i18n/i18n.languages.const';
import {NzI18nService} from 'ng-zorro-antd/i18n';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private dfLng = DEFAULT_LANGUAGE;
  private readonly change$ = new BehaviorSubject<string | null>(null);
  current = {
    code: '',
    name: ''
  };

  private readonly langsMap = Object.keys(LANGS).map(code => {
    const item = LANGS[code];
    return {code, text: item.text, img: item.img};
  });

  constructor(
    private readonly nzI18nService: NzI18nService,
    private readonly translateService: TranslateService,
  ) {
    const defaultLan = 'pt-BR';
    const lans = this.langsMap.map(item => item.code);
    translateService.addLangs(lans);

    this.dfLng = lans.includes(defaultLan) ? defaultLan : lans[0];
    this.updateLangData(this.dfLng);
  }

  private updateLangData(lang: string) {
    const item = LANGS[lang];
    registerLocaleData(item.ng);
    this.nzI18nService.setLocale(item.zorro);
    (window as any).__locale__ = item.dateFns;
    this.current.name = item.text;
    this.current.code = lang;
  }

  get change(): Observable<string> {
    return this.change$.asObservable().pipe(filter(w => w != null));
  }

  use(lang: string): void {
    lang = lang || this.translateService.getDefaultLang();
    if (this.currentLang === lang) {
      return;
    }
    this.updateLangData(lang);
    this.translateService.use(lang).subscribe(() => this.change$.next(lang));
  }

  /** Obter a lista de Linguagens */
  getLangs() {
    return this.langsMap;
  }

  /** Traduzir */
  fanyi(key: string, interpolateParams?: object) {
    return this.translateService.instant(key, interpolateParams);
  }

  translate(key: string, interpolateParams?: object): string {
    return this.fanyi(key, interpolateParams);
  }

  /** Obter linguagem padrão */
  get defaultLang() {
    return this.dfLng;
  }

  /** Obter linguagem atual */
  get currentLang() {
    return this.translateService.currentLang || this.translateService.getDefaultLang() || this.dfLng;
  }
}
