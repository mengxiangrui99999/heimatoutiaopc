import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入模块
import ElementUI from 'element-ui'
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入axios
import axios from 'axios'
import '@/styles/index.less'
Vue.config.productionTip = false
// 全局注册element-ui框架一旦全局注册所有位置都可以使用
Vue.use(ElementUI)
// 配置axios的baseURL
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 配置公共请求头地址
Vue.prototype.$axios = axios// 将axios赋值给Vue对象原型属性
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
