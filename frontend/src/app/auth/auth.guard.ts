import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LoginService } from './../home/login/login.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.loginService.check()) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.loginService.check()) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }

  // canActivate(
  //   router: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> {
  //   return this.loginService.autenticado().pipe(
  //     tap((b) => {
  //       if (!b) {
  //         this.router.navigateByUrl('/home');
  //       }
  //     })
  //   );
  // }

  // canActivateChild(
  //   router: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> {
  //   return this.loginService.autenticado().pipe(
  //     tap((b) => {
  //       if (!b) {
  //         this.router.navigateByUrl('/home');
  //       }
  //     })
  //   );
  // }
}
