import {Component} from '@angular/core';
import { IonicPage,NavParams,NavController,AlertController,ToastController,ModalController} from 'ionic-angular';

//导入注册页面
import { RegisterPage } from '../register/register';

// 导入提示框
// import {ToastController} from 'ionic-angular';
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
              public alertController:AlertController,
              public toastCtrl:ToastController,
              public modalCtrl:ModalController,
              public navParams: NavParams) {
  }



  //错误提示框
  userAccount:string;
  checkAccount(position: string) {
    if(this.userAccount!==null && this.userAccount!==undefined && this.userAccount!==''){
       //定义正则表达式
      let phoneNumberREG =/^1[3|4|5|7|8][0-9]{9}$/;
      if(phoneNumberREG.test(this.userAccount)){

      }else{
        let toast = this.toastCtrl.create({
          message: '手机号不正确',
          duration: 2000,
          position: position
        });

        toast.present(toast);
      }

    }else {
      let toast = this.toastCtrl.create({
        message: '用户名不能为空',
        duration: 2000,
        position: position
      });

      toast.present(toast);
    }
  }
//



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){

  }


  //注册
  register(){
    let model=this.modalCtrl.create(RegisterPage);
    model.present();

  }


}


