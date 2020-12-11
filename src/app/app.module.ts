import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N, pt_BR} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import pt from '@angular/common/locales/pt';
import {FooterComponent} from './footer/footer.component';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {SharedModule} from './shared/shared.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {I18nProviderFactory, I18nStartupService} from './core/initializers/i18n.startup.service';
import {DEFAULT_LANGUAGE_CONFIG} from './shared/configs/i18n/i18n.languages.const';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

registerLocaleData(pt);

export function I18nHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

const I18NSERVICE_MODULES = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: I18nHttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
];

const LANG_PROVIDES = [
  {provide: LOCALE_ID, useValue: DEFAULT_LANGUAGE_CONFIG.abbr},
  {provide: NZ_I18N, useValue: DEFAULT_LANGUAGE_CONFIG.zorro},
];

const APPINIT_PROVIDES = [
  I18nStartupService,
  {provide: APP_INITIALIZER, useFactory: I18nProviderFactory, deps: [I18nStartupService], multi: true},
  // { provide: APP_INITIALIZER, useFactory: SubjectProviderFactory, deps: [SubjectStartupService], multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ...I18NSERVICE_MODULES,
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
    ...LANG_PROVIDES,
    ...APPINIT_PROVIDES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
