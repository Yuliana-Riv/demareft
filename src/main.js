import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'vue-dayjs'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCarousel from 'vue-carousel'
import * as GoogleMaps from 'vue2-google-maps'

let urlpath = require('./global/url')

Vue.use(GoogleMaps, {
  load: {
    key: 'AIzaSyAt4YVyS-ej06i-kOLQ-u3oRFjPtIt7s-o',
    libraries: 'places',
  }
});

Vue.use(dayjs)

Vue.use(VueAxios, axios)
Vue.use(VueCarousel);

axios.defaults.baseURL =urlpath.url();

Vue.config.productionTip = false

new Vue({
  router,
  store, 
  render: h => h(App),
}).$mount('#app')
