import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListCategoryRoutingModule } from './list-category-routing.module';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListCategoryTableComponent } from './list-category-table/list-category-table.component';
import { ListCategoryFormComponent } from './list-category-form/list-category-form.component';

@NgModule({
  declarations: [ListCategoryComponent, ListCategoryTableComponent, ListCategoryFormComponent],
  imports: [
    CommonModule,
    ListCategoryRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListCategoryModule { }
