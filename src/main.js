import Vue from 'vue'
import App from './App.vue'
const boostrap = require('bootstrap')
Vue.use(boostrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
