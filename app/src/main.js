import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);

Vue.use(VueSweetalert2);

Vue.use(IconsPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')

// To update the title for every page
router.afterEach((to) => {
  document.title = to.meta.title;
});