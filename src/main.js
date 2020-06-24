import Vue from 'vue';
import App from './App.vue';
import 'animate.css';
import { ObserveVisibility } from 'vue-observe-visibility';

Vue.directive('observe-visibility', ObserveVisibility);
var VueScrollTo = require('vue-scrollto');
Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  duration: 500,
  easing: "ease",
});
new Vue({
  render: h => h(App),
}).$mount('#app')
