import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DateFilter from './filter/date'

import vuetify from "./plugins/vuetify";
// validate --------
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('en', en);

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
//-------------
Vue.filter('date', DateFilter)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
