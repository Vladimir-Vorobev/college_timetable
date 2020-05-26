import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

import {STORE} from '../store'

import MainPage from './components/MainPage.vue'
import Test from './components/Test.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: MainPage },
  { path: '/test', component: Test },
]

const router = new VueRouter({
  mode: 'history',
  routes // сокращённая запись для `routes: routes`
})

const store = new Vuex.Store(STORE)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
