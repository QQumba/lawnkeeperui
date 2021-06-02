import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { LawnsComponent } from './lawns/lawns.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { LawnInfoComponent } from './lawn-info/lawn-info.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SidebarTopComponent } from './sidebar-top/sidebar-top.component';
import { SidebarBottomComponent } from './sidebar-bottom/sidebar-bottom.component';
import {MissingTranslationHandler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MissingTranslationService} from '../translate/missingTranslationService';
import { NotificationComponent } from './notification/notification.component';
import {routes} from './app.routes';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleColComponent } from './schedule-col/schedule-col.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LawnsComponent,
    SignupComponent,
    LoginComponent,
    AccountComponent,
    LawnInfoComponent,
    SidebarTopComponent,
    SidebarBottomComponent,
    NotificationComponent,
    ScheduleComponent,
    ScheduleColComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler, useClass: MissingTranslationService
      },
      useDefaultLang: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
