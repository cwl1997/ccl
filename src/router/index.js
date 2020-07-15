import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/system/login.vue'
import Container from '@/container/Container'
import Dashboard from '@/system/dashboard'
import Article from '@/system/article'

Vue.use(Router)

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
        {path: 'dashboard', name: '首页', component: Dashboard, },
        {path: 'article', name: '文章', component: Article, },
      ]
    }
  ]
})
