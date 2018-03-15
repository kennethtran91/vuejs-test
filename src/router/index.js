import Vue from 'vue'
import Router from 'vue-router'
import SignInForm from '@/components/SignInForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignInForm',
      component: SignInForm
    }
  ]
})
