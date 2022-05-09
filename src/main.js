import Vue from 'vue'
import App from './App.vue'

//bootstaps
const boostrap = require('bootstrap')
Vue.use(boostrap)

// flags
import FlagIcon from 'vue-flag-icon'
Vue.use(FlagIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
