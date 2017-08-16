// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// Include BootstrapVue library in our application <1>
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue) // <2>

/* eslint-disable no-new */ // <3>
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
