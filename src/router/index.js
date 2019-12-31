import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Login from '@/pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/login',
      name: 'loginPage',
      component: Login
    }
  ]
})
