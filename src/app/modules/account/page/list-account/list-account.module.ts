import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAccountRoutingModule } from './list-account-routing.module';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SiginComponent, SigupComponent],
  imports: [
    CommonModule,
    ListAccountRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ListAccountModule { }
