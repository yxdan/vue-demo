import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Err404 = r => require.ensure([], () => r(require('@/pages/error/Err404')), 'other')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: Err404
    },
    {
      path: '/home',
      component: resolve => require([ '@/pages/home.vue' ], resolve)
    },
    {
      path: '/menu/home',
      component: resolve => require([ '@/pages/menu/home.vue' ], resolve)
    }
  ]
})
