import Vue from 'vue'
import App from './App.vue'
import apiFactory from './api/index'

Vue.config.productionTip = false

Vue.use(apiFactory)


new Vue({
  render: h => h(App),
}).$mount('#app')
