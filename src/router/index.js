import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../views/Main.vue'), //只有执行此函数才会加载路由组件， 这个函数在请求对应的路由时才会执行
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          keepAlive: true
        },
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
  },

  {
    path: '/userinfo',
    name: 'UserInfo',
    component: () => import('../views/UserInfo/UserInfo.vue'),
    meta: {
      keepAlive: true
    }
  },

  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop/Shop.vue'),
    redirect: '/shop/goods',
    meta: {
      keepAlive: true
    },
    children: [
      {
        path: '/shop/goods',
        component: () => import('../views/Shop/ShopGoods/index.vue'),

      },
      {
        path: '/shop/ratings',
        component: () => import('../views/Shop/ShopRatings/index.vue'),

      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
