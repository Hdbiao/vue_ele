import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/search/Search.vue')
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('@/views/order/Order.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/profile/Profile.vue')
      },
    ]
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
