import Vue from 'vue'
import fetch from 'jest-fetch-mock'

Vue.config.productionTip = false

global.fetch = fetch
