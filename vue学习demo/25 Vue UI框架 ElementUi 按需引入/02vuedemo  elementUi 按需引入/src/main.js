import Vue from 'vue';
import App from './App.vue';

//elementUi的使用
import { Button, Select, Input} from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Input);
import 'element-ui/lib/theme-chalk/index.css';




//引入公共的scss   注意：创建项目的时候必须用scss

import './assets/css/basic.scss';   



//请求数据
import VueResource from 'vue-resource';
Vue.use(VueResource);


//配置路由
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//1.创建组件


import Home from './components/Home.vue';

import News from './components/News.vue';

import User from './components/User.vue';


//2.配置路由   注意：名字

const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News,name:'news' },

  { path: '/user', component: User},
 

  { path: '*', redirect: '/home' }   /*默认跳转路由*/
]


//3.实例化VueRouter  注意：名字

const router = new VueRouter({
  mode: 'history',   /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})




//4、挂载路由

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//5 <router-view></router-view> 放在 App.vue
