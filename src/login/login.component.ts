import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { ENCRYPTION_CONSTANTS } from './encryption-lib/encryption-constants';

declare var AesUtil: any;
@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  /**
   *
   */
  data: any[];
  userName: string;
  password: string;
  aesUtil: any;
  ciphertext: any;
  constructor(private _loginService: LoginService) {
    this.aesUtil = new AesUtil(ENCRYPTION_CONSTANTS.KEY_SIZE, ENCRYPTION_CONSTANTS.ITERATION_COUNT);
  }

  encryptPassword(): any {
    this.ciphertext = this.aesUtil.encrypt(ENCRYPTION_CONSTANTS.STATIC_SALT, ENCRYPTION_CONSTANTS.STATIC_IV,
      ENCRYPTION_CONSTANTS.PASS_PRAHSE, 'Anda!1483');
    console.log(this.ciphertext);
    // return this.ciphertext;

   // TODO remove this statement once the user details are created in LDAP  sever
    return 'y/Wv/KduFGIjRMBb2W1ixw==';
  }

  login(loginForm) {
    if (!loginForm.valid) {
      return false;
    }
     // TODO remove this string from the below statement and pass this.userName once the user details are created in LDAP  sever.

    this._loginService.login('sgajula', this.encryptPassword());
  }



  // $.get('/aes', {
  //   passphrase: passphrase,
  //   iv: iv,
  //   salt: salt,
  //   ciphertext: ciphertext,
  //   iterationCount: iterationCount,
  //   keySize: keySize
  // }, function(data) {
  //   alert('Plaintext: ' + data);
  // });
}
