import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import {Authentication} from './authentication';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';

import { ForgotPwdComponent } from './ForgotPassword/forgot-password.component';
import { ResetmailComponent } from './ForgotPassword/resetmail.component';

export const routes: Routes = [
 {
    path: '',
    component: LoginComponent,
    data: {
      title: 'CRYBTO BOLT'
    }
  },
  {
    path: 'Register',
    component: RegisterComponent,
    data: {
      title: 'CRYBTO BOLT'
    }
  },
  {
    path: 'ResetPassword',
    component: ResetmailComponent,
    data: {
      title: 'CRYBTO BOLT'
    }
  },
  {
    path: 'ForgotPassword',
    component: ForgotPwdComponent,
    data: {
      title: 'CRYBTO BOLT'
    }
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate:[Authentication]
      },
      {
        path: '**',
        component: LoginComponent,
        data: {
          title: 'Online Travel Management'
        }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
