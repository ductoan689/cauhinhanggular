import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'env/environment';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('modules/home/home.module').then(m => m.HomeModule) },
  { path: 'error', loadChildren: () => import('modules/error/error.module').then(m => m.ErrorModule) },
  {
    path: 'category-management', loadChildren: () => import('modules/category_management/category-management.module').then(m => m.CategoryManagementModule),
  },
  { path: 'account', loadChildren: () => import('modules/account/account.module').then(m => m.AccountModule ) },
  { path: 'tag', loadChildren: () => import('modules/tag/tag.module').then(m => m.TagModule) } ,
  { path: '**', redirectTo: 'error/page-not-found' },

];

if (environment.defaultRouterLink) {
  routes.unshift({ path: '', redirectTo: environment.defaultRouterLink, pathMatch: 'full' },);
}

@NgModule({
  imports: [RouterModule.forRoot(routes, environment.routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
