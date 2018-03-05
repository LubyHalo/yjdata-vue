import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PasswordSetting from '@/components/content/PasswordSetting'
import Information from '@/components/content/Information'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: Home
    },
    {
      path: '/setting-password',
      name: 'changePassword',
      component: PasswordSetting
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    }
  ]
})
