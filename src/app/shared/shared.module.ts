import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { SilentCheckSsoComponent } from './components/silent-check-sso/silent-check-sso.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SilentCheckSsoComponent, SpinnerComponent],
  imports: [
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
