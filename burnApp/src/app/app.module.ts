import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MyPage } from '../pages/my/my';
import { BlogPage } from '../pages/blog/blog';
import { BlogDetailPage } from '../pages/blog-detail/blog-detail';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CoursePage } from '../pages/course/course';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { UserProvider } from '../providers/user/user';
import {HttpModule} from '@angular/http'
//添加storage模块
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    MyPage,
    BlogPage,
    HomePage,
    TabsPage,
    LoginPage,
    CoursePage,
    RegisterPage,
    BlogDetailPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyPage,
    BlogPage,
    HomePage,
    TabsPage,
    LoginPage,
    CoursePage,
    RegisterPage,
    BlogDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationServiceProvider,
    HttpServiceProvider,
    UserProvider,

  ]
})
export class AppModule {}
