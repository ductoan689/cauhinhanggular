import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagRoutingModule } from './tag-routing.module';
import { TagListComponent } from './pages/tag-list/tag-list.component';
import { TagDetailComponent } from './pages/tag-detail/tag-detail.component';
import { AdminLayoutModule } from 'src/app/layouts/admin/admin-layout.module';



@NgModule({
  declarations: [
    TagListComponent, 
    TagDetailComponent
  ],
  imports: [
    CommonModule,
    TagRoutingModule,
    AdminLayoutModule
  ]
})
export class TagModule { }
