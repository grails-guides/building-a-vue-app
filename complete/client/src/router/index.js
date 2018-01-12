import Vue from 'vue'
import Router from 'vue-router'
import Garage from '@/components/Garage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Garage',
      component: Garage
    }
  ]
})
