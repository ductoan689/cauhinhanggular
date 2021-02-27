import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from 'src/app/layouts/default/default-layout/default-layout.component';
import { HomeAddAddcardComponent } from './pages/home-add-addcard/home-add-addcard.component';
import { SigningComponent } from './pages/signing/signing.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { 
    path: '', 
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'add-card',
        component: HomeAddAddcardComponent,
      },   
    ] 
  },
  { 
    children: [
      { path: '', component: LoginComponent },
      {
        path: 'log-in',
        component: LoginComponent,
      },   
    ] 
  },
  { 

    children: [
      { path: '', component: SigningComponent },
      {
        path: 'sig-ning',
        component: SigningComponent,
      },   
    ] 
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
