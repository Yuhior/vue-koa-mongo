import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import api from './http/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import cookie from './utils/cookie';


Vue.prototype.$cookie = cookie;

Vue.config.productionTip = false;
// $bug就是消息中心

Vue.prototype.$bus = new Vue()

Vue.use(ElementUI)

Vue.use(api);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
