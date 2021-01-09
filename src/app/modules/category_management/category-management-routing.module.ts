import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'list-category',
    loadChildren: () => import('./pages/list-category/list-category.module').then(m => m.ListCategoryModule),
    // canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryManagementRoutingModule { }
