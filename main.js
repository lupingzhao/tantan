import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import api from 'https/api.js'
Vue.config.productionTip = false
Vue.prototype.$api=api
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif
