// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '@/css/init.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon/iconfont.css'
import VueMarkdown from 'vue-markdown'

// Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueMarkdown)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
