import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { routes } from '../routes/routes';
import { Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  appRoutes: Routes = [];
  subscription: Subscription;

  constructor(private _loginService: LoginService, private _appRouter: Router) {

    this.appRoutes = routes.filter(route => route.data.title);
    this.subscription = this._loginService.getMessage().subscribe(message => {
      if (message.text === 'LOGGED') {
        this._appRouter.navigateByUrl('/newRegistration');
      }
    });
  }

  logoutUser() {
    this._loginService.logout();
    this._appRouter.navigateByUrl('/login');
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();

  }
}
