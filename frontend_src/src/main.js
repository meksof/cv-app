import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import "es6-promise/auto"; // Needed for vuex
import "./filters";
// styles
import "./style.scss";

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
