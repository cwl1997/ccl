import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/system/login.vue'
import Container from '@/container/Container'
import Dashboard from '@/system/dashboard'
import Article from '@/system/article'
import home from '@/view/home/index'

Vue.use(Router)

//解决重复点击报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Container',
      component: Container,
      children: [
        {path: 'dashboard', name: '首页', component: Dashboard, 
          children: [
            {path: 'dashboard1', name: '首页1', component: Dashboard,},
            {path: 'dashboard2', name: '首页2', component: Dashboard,
              children: [
                {path: 'dashboard21', name: '首页21', component: Dashboard,},
                {path: 'dashboard22', name: '首页22', component: Dashboard, },
              ] },
          ]
        },
        {path: 'article', name: '文章', component: Article, },
        {path: 'home', name: '测试', component: home, },
      ]
    }
  ]
})
