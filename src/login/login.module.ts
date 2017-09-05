import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

/* ...other imports... */

@NgModule({
  imports: [CommonModule, HttpModule, FormsModule],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent]
})
export class LoginModule {
  /**
   *
   */
  constructor() {
  }
  static forRoot(url: string): ModuleWithProviders {
    return {
      ngModule: LoginModule,
      providers: [LoginService]
    };
  }
}



