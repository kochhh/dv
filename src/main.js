import Vue from 'vue';

import { BootstrapVue } from 'bootstrap-vue';
import VueMeta from 'vue-meta';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import App from './App.vue';
import router from './router';
import store from './store';

import './styles/main.scss';

Vue.use(BootstrapVue);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
