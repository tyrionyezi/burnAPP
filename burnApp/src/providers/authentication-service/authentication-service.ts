import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs";

/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthenticationServiceProvider {
   activeUser = new BehaviorSubject(null);
  constructor(public http: Http) {
    console.log('Hello AuthenticationServiceProvider Provider');
  }
  doLogin(_username){
    this.activeUser.next(_username);
  }
  doLogout(){
    this.activeUser.next(null);
  }

}
