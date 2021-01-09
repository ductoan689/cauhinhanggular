import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(protected router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('token')){
      let token =   jwt_decode( localStorage.getItem('token'));
    }else{
      this.router.navigateByUrl('');
      return false;
    }
  }
}
