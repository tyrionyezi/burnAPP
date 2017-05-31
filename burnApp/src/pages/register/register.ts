import { Component } from '@angular/core';
import { IonicPage,NavParams,NavController,ViewController,AlertController,ToastController,ModalController} from 'ionic-angular';
//导入tabsPage
import { TabsPage } from '../tabs/tabs';

//导入请求数据服务
import { UserProvider } from '../../providers/user/user';

//引入本地缓存模块
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [UserProvider]
})
export class RegisterPage {

  constructor(public viewCtrl: ViewController,
              public navCtrl: NavController,
              public alertController:AlertController,
              public toastCtrl:ToastController,
              public modalCtrl:ModalController,
              public userService: UserProvider,
              public storage:Storage,
              public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goBack(){
    this.viewCtrl.dismiss();
  }

  //获取表单数据
  userAccount:string;
  userPWD:string;
  userCPWD:string;

  //手机号验证
  registerUserAccount(position: string){
    // let registerbtn=document.getElementById('#aaa');
    if(this.userAccount!==null && this.userAccount!==undefined && this.userAccount!==''){
      //定义正则表达式
      let phoneNumberREG =/^1[3|4|5|7|8][0-9]{9}$/;
      if(phoneNumberREG.test(this.userAccount)){

      }else{
        // registerbtn.style.color='grey';
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

  //密码位数验证
  registerUserPWD(position: string){
    if(this.userPWD!==null && this.userPWD!==undefined && this.userPWD!==''){
      let checkUserPWD =  /^[0-9A-Za-z]{6,}$/;
      console.log(checkUserPWD.test(this.userPWD));
      if(checkUserPWD.test(this.userPWD)){

      }else {
        console.log("here");
        let toast = this.toastCtrl.create({
          message: '密码不能少于六位',
          duration: 2000,
          position: position
        });

        toast.present(toast);
      }

    }else{
      let toast = this.toastCtrl.create({
        message: '密码不能为空',
        duration: 2000,
        position: position
      });

      toast.present(toast);
    }
  }


  //确认密码验证
  registerUserCPWD(position: string){
    if(this.userCPWD!==null && this.userCPWD!==undefined && this.userCPWD!==''){
      let checkUserPWD =  /^[0-9A-Za-z]{6,}$/;
      if(checkUserPWD.test(this.userCPWD)){
        if(this.userPWD!==this.userCPWD){
          let toast = this.toastCtrl.create({
            message: '两次输入密码不一致',
            duration: 2000,
            position: position
          });
          toast.present(toast);
        }
      }else {
        let toast = this.toastCtrl.create({
          message: '密码不能少于六位',
          duration: 2000,
          position: position
        });
        toast.present(toast);
      }
    }else {
      let toast = this.toastCtrl.create({
        message: '密码不能为空',
        duration: 2000,
        position: position
      });

      toast.present(toast);
    }
  } //确认密码验证结束


  register(){
    let data={
      utel:this.userAccount,
      upwd:this.userPWD,
    };
    console.log(1);
    console.log(data);
    this.userService.register(data).then((data)=>{
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
          message: '手机号已被注册',
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
  }










}
