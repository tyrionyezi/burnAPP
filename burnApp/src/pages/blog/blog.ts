import { Component } from '@angular/core';
//注入依赖
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
//导入博客详情页面
import { BlogDetailPage } from '../blog-detail/blog-detail';

/**
 * Generated class for the BlogPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

  constructor(public navCtrl: NavController,
              public modalCtrl:ModalController,
              public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad BlogPage');
  // }


  //跳转到详情页面
  blogDetail(){
    let blogdetail = this.modalCtrl.create(BlogDetailPage);
    blogdetail.present();
  }

}
