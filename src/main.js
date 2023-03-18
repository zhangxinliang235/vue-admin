import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCompositionAPI from '@vue/composition-api'; // vue3.0 Composition API
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(VueCompositionAPI)


/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
 if ( process.env.NODE_ENV === 'production' ||
 process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
