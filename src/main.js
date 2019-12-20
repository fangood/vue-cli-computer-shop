import Vue from 'vue'
import First from './views/First.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(First),
}).$mount('#app')
