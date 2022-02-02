import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import {ImageEditor} from '@toast-ui/vue-image-editor';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
