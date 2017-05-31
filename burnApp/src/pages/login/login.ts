import {Component} from '@angular/core';
import {
  IonicPage,
  NavParams,
  NavController,
  AlertController,
  ToastController,
  ModalController} from 'ionic-angular';

//导入注册页面
import { RegisterPage } from '../register/register';

//导入tabsPage
import { TabsPage } from '../tabs/tabs';

//导入请求数据服务
import { UserProvider } from '../../providers/user/user';

//引入本地缓存模块
import { Storage } from '@ionic/storage';

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
  providers: [UserProvider]
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public alertController:AlertController,
              public toastCtrl:ToastController,
              public modalCtrl:ModalController,
              public navParams: NavParams,
              public userService: UserProvider,
              public storage:Storage

  ) {
  }


  //获取html页面数据
  userAccount:string;
  userPassword:string;


  //错误提示框
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

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

  //登陆函数
  login(){
    let data={
      utel:this.userAccount,
      upwd:this.userPassword,
    };
    this.userService.login(data).then((data)=>{
      if(data.result==1){
        let userInfo={
          utel:this.userAccount,
          token:data.token,
        };
        this.storage.set('userInfo',userInfo);
        let model = this.modalCtrl.create(TabsPage);
        model.present();
      }else {
        let toast = this.toastCtrl.create({
          message: '用户名或密码错误',
          duration: 3000
        });
        toast.present();
      }
    },(error)=>{
      let toast = this.toastCtrl.create({
        message: '网络异常',
        duration: 3000
      });
      toast.present();
    })


    let tab = this.modalCtrl.create(TabsPage);
    tab.present();


  }  //登陆结束



  //跳转到注册页面
  register(){
    let register = this.modalCtrl.create(RegisterPage);
    register.present();
  }

}


