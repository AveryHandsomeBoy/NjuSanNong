import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import service from "./util/https.ts";

Vue.prototype.$http = service; // 其他页面在使用 axios 的时候直接  this.$http 就可以了

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
