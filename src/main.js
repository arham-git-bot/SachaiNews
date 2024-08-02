import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import './assets/main.css'

import Vue from "vue";


import "vuetify/styles";

import store from "./store"; 

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store, // Inject the Vuex store
}).$mount("#app");
loadFonts()

createApp(App).use(router)
  .use(vuetify)
  .mount('#app')
  console.log('Base URL:', process.env.VUE_APP_BASE_URL); // For Vue CLI
