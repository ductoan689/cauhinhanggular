import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';


const routes: Routes = [
  {
    path:'sigin',
    children:[
      {
        path:'',
        component:SiginComponent
      }
    ]
  },
  {
    path:'sigup',
    children:[
      {
        path:'',
        component:SigupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAccountRoutingModule { }
