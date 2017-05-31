import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//导入httpService
import {HttpServiceProvider} from "./../http-service/http-service"

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {
  Url= 'http://localhost:3000';

  constructor(public http: Http,
              private httpService: HttpServiceProvider
  ) {}

  //登陆
  login(data){
    if(data){
      let url = this.Url + "/users/login";
      return this.httpService.httpPostWithAuth(data,url);
    }else {
      return null;
    }
  }

  //注册
  register(data){
    console.log(2);
    console.log(data);
    if(data){
      let url = this.Url + "/users/regist";
      return this.httpService.httpPostWithAuth(data,url);
    }else {
      return null;
    }
  }

}
