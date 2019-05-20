// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'normalize.css'
import 'amfe-flexible'
import 'lib-flexible/flexible' // rem 淘宝

import vueClipBoard from 'vue-clipboard2' // 复制粘贴
Vue.use(vueClipBoard)

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
