import Vue from 'vue'
import Welcome from '@/components/Welcome'
const uiv = require('uiv')

describe('Welcome.vue', () => {
  it('should render correct contents', () => {
    Vue.use(uiv)
    const Constructor = Vue.extend(Welcome)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#content .row h1').textContent)
      .toEqual('Welcome to Grails')
  })
})
