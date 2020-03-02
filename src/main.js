import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入模块
import ElementUI from 'element-ui'
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'
Vue.config.productionTip = false
// 全局注册element-ui框架一旦全局注册所有位置都可以使用
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
