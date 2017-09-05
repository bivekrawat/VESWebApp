import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModule } from '../login/login.module';
import { LoginService } from '../login/login.service';
import { NewResistrationComponent } from './new-registration/new-registration.component';
import { RouteModule } from '../routes/routes.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { environment } from '../environments/environment';
import { ApprovedRequestsComponent } from './approved-requests/approved-requests.component';
import { CookieService } from './cookie.service';
import { Http } from '@angular/http';
// import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NewResistrationComponent,
    AuthenticationComponent,
    ApprovedRequestsComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    LoginModule.forRoot(environment.loginURL)
    // FormsModule
  ],
  providers: [CookieService,
    { provide: LoginService, useFactory: configureLoginService, deps: [Http] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function configureLoginService(http: Http) {
  return new LoginService(environment.loginURL, http);
}
