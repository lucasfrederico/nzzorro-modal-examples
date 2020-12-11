import ngPt from '@angular/common/locales/pt';

import * as df_pt from 'date-fns/locale/pt';

import {LangData} from './i18n.lang-data.model';
import {pt_BR} from 'ng-zorro-antd/i18n';

export const DEFAULT_LANGUAGE = 'en';

export const DEFAULT_LANGUAGE_CONFIG = {
  abbr: 'pt-BR',
  text: 'Português',
  ng: ngPt,
  zorro: pt_BR,
  dateFns: df_pt,
  img: '/assets/img/flag-brazil.png',
};

export const LANGS: { [key: string]: LangData } = {
  'pt-BR': DEFAULT_LANGUAGE_CONFIG,
};
