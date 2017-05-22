import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

// 导入提示框
import {ToastController} from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public navParams: NavParams) {
  }
   //错误提示框
  checkAccount(position: string) {
    let toast = this.toastCtrl.create({
      message: '用户名不能为空',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }
//



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){

  }

}
