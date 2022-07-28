import Vue from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import VueLazyload from "vue-lazyload";
Vue.config.productionTip = false;
Vue.use(VueLazyload);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
