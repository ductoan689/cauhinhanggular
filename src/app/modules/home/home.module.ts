import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DefaultLayoutModule } from 'src/app/layouts/default/default-layout.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomeAddAddcardComponent } from './pages/home-add-addcard/home-add-addcard.component';
import { LoginComponent } from './pages/login/login.component';
import { SigningComponent } from './pages/signing/signing.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent, HomeAddAddcardComponent,  SigningComponent, LoginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DefaultLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule

  ]
})
export class HomeModule { }
