import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultLayoutComponent} from 'layout/default/default-layout/default-layout.component';
import { ListCategoryComponent } from './list-category/list-category.component';

const routes: Routes = [
  { path: '',
    children: [
      {
        path: '',
        component: ListCategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCategoryRoutingModule { }
