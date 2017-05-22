import { Component } from '@angular/core';

import { MyPage } from '../my/my';
import { HomePage } from '../home/home';
import { BlogPage } from '../blog/blog';
import { CoursePage } from '../course/course';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CoursePage;
  tab3Root = BlogPage;
  tab4Root = MyPage;

  constructor() {

  }
}
