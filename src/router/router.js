import Vue from 'vue';
import Router from 'vue-router';
import Article from '../components/Article.vue';
import PostList from '../components/PostList.vue';
import UserInfo from '../components/UserInfo.vue';
import SlideBar from '../components/SlideBar.vue';

Vue.use(Router);

export default new Router({
  routes: [{
      name: 'root',
      path: '/',
      components: {
        main: PostList
      }
    },
    {
      name: 'post_content',
      path: '/article/:id&author=:name',
      components: {
        main: Article,
        slidebar: SlideBar
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components: {
        main: UserInfo
      }
    }
  ]
});
