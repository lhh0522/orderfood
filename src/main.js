import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.prototype.http = axios
Vue.use(VueRouter)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://api.yesapi.cn/api/App/Table/Create/';
new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
