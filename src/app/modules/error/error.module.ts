import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ErrorRoutingModule } from './error-routing.module';
import { DefaultLayoutModule } from 'src/app/layouts/default/default-layout.module';
import { InsufficientPermissionComponent } from './pages/insufficient-permission/insufficient-permission.component';


@NgModule({
  declarations: [PageNotFoundComponent, InsufficientPermissionComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    DefaultLayoutModule
  ]
})
export class ErrorModule { }
