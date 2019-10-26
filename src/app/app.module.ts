import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { HttpModule, Http } from '@angular/http';
// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { CommonService } from './commonService';
import {Authentication} from './authentication';
import { HttpService } from './../services/httpservice';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { EqualValidator } from './common/validation';

import { ForgotPwdComponent } from './ForgotPassword/forgot-password.component';
import { ResetmailComponent } from './ForgotPassword/resetmail.component';
import { QRCodeModule } from 'angular2-qrcode';
import { CommonModule } from '@angular/common';
import {SelectModule} from 'ng2-select';
// import { NgChatModule } from 'ng-chat';


@NgModule({
  imports: [
    BrowserModule,
    QRCodeModule,
    // NgChatModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    SelectModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    EqualValidator,
    ForgotPwdComponent,
    ResetmailComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },CommonService,Authentication, HttpService],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
