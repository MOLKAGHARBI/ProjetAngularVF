import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './service/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  r:any;
  constructor(private A:AuthentificationService, private router:Router){}
  /*canActivate() {
    if (this.A.role=="admin")
    return true;
    else {
      this.router.navigate(['/authentifier'])
     return false;
    }

  }*/
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn = this.isLoggedIn();
    
    if (isLoggedIn && localStorage.getItem('token')=="molkaetsahar" ) {
      return true;
    }else{
      this.router.navigate(['admin/login']);
      return false;
    }
    
  }

  public isLoggedIn(): boolean{
    let status = false;
    if( localStorage.getItem('isLoggedIn') == "true"){
      status = true;
    }
    else{
      status = false;
    }
    return status;
}
  
}
