import Vue from 'vue'
import VueRouter from 'vue-router'
// 用一种简写方式代替原有方式
import Home from '@/views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 强制跳转home
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
  // {
  //   // 按需加载
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
