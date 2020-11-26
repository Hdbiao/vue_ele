import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import '@/assets/scss/normalize.scss'
import './assets/scss/style.scss'
import 'lib-flexible/flexible'
import './assets/icon/iconfont.css'
import { Button, Dialog, Toast } from 'vant'
import './filters/index' // 加载过滤器

import loadding from './assets/imgs/loadding.gif'

Vue.use(Button)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(VueLazyload, { //内部自定义一个指令lazy
  preLoad: 1.3,
  loading: loadding,
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
