import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagDetailComponent } from './pages/tag-detail/tag-detail.component';
import { TagListComponent } from './pages/tag-list/tag-list.component';
import { AdminLayoutComponent } from 'src/app/layouts/admin/admin-layout/admin-layout.component';
import { AdminLayoutModule } from 'src/app/layouts/admin/admin-layout.module';
import { AuthGuard } from 'src/app/core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: TagListComponent },
      { path: 'detail/:id', component: TagDetailComponent }
    ]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ], 
  exports: [
    RouterModule,
    AdminLayoutModule
  ]
})
export class TagRoutingModule { }
