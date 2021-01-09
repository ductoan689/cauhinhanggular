import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultLayoutHeaderComponent } from './default-layout-header/default-layout-header.component';
import { DefaultLayoutFooterComponent } from './default-layout-footer/default-layout-footer.component';
import { DefaultLayoutNavComponent } from './default-layout-nav/default-layout-nav.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    DefaultLayoutHeaderComponent,
    DefaultLayoutFooterComponent,
    DefaultLayoutNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DefaultLayoutComponent,
    DefaultLayoutHeaderComponent,
    DefaultLayoutFooterComponent,
    DefaultLayoutNavComponent,
  ]
})
export class DefaultLayoutModule { }
