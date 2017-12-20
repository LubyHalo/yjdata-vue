// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import EasyScroll from 'easyscroll'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/reset.css'
import App from './App'
import router from './router'

Vue.use(ElementUI)
Vue.use(EasyScroll)
Vue.config.productionTip = false
require('./mock.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.filter('getYMD', function(input) {
  return input.split(' ')[0];
})