import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
// const loginURL = 'http://192.168.150.82:9015/api/oauth-authenticate';
@Injectable()
export class LoginService {

  private _producturl = '';
  userLogged = new Subject<any>();

  constructor(private loginURl: string, private http: Http) {

  }
  sendMessage(message: string) {
    this.userLogged.next({ text: message });
  }

  clearMessage() {
    this.userLogged.next();
  }

  getMessage(): Observable<any> {
    return this.userLogged.asObservable();
  }

  login(userName: string, password: string) {
    this._producturl = this.loginURl + '?username=' + userName + '&password=' + password;
    return this.http.get(this._producturl)
      .map((response: Response) => response.json())
      .subscribe((data) => {
        this.setCookie('USER_TOKEN', data.accessToken, 3, '');
        this.sendMessage('LOGGED');
        console.log(data);
      }, (data) => {
        console.log(data);
      });
  }

  logout() {
    this.setCookie('USER_TOKEN', '', -1, '');
  }


  isUserLoggedin(): boolean {
    let accesstoken = this.getCookie('USER_TOKEN');
    if (accesstoken !== '') {
      return true;
    } else {
      return false;
    }
  }

  get userToken(): any {
    return JSON.parse(localStorage.getItem('USER_TOKEN'));
  }


  private getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = name + '=';
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s\+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  private deleteCookie(name) {
    this.setCookie(name, '', -1);
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = '') {
    let d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires: string = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + '; ' + expires + (path.length > 0 ? '; path=' + path : '');
  }

}



