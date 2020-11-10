import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/assets/scss/normalize.scss'
import './assets/scss/style.scss'
import 'lib-flexible/flexible'
import './assets/icon/iconfont.css'

axios.defaults.baseURL = 'https://elm.cangdu.org'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
