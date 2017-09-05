import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class RouteGaurdService implements CanActivate {

  constructor(private _loginService: LoginService, private _router: Router) { }

  canActivate() {
    let isUserLoggedin = this._loginService.isUserLoggedin();
    if (isUserLoggedin) {
      return true;
    } else {
      this._router.navigate(['/login']);
    }
    return false;
  }
}
