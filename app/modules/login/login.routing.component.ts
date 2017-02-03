import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];


export const LoginRouterProvider = RouterModule.forRoot(routes)
