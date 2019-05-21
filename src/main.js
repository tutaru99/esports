import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueInstagram from 'vue-instagram';

Vue.use(VueInstagram)
Vue.config.productionTip = false;

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app');
