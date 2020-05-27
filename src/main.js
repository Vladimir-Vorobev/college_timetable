import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

import {STORE} from '../store'

import MainPage from './components/MainPage.vue'
import GroupsList from './components/GroupsList.vue'
import TeachersList from './components/TeachersList.vue'
import ClassroomsList from './components/ClassroomsList.vue'
import UploadFile from './components/UploadFile.vue'

import GroupTimetable from './components/GroupTimetable.vue'
import TeacherTimetable from './components/TeacherTimetable.vue'
import ClassroomTimetable from './components/ClassroomTimetable.vue'

require('@/assets/styles/tooltip.css')

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: MainPage },
  { path: '/groups-list', component: GroupsList },
  { path: '/teachers-list', component: TeachersList },
  { path: '/classrooms-list', component: ClassroomsList },
  { path: '/group-timetable', component: GroupTimetable },
  { path: '/teacher-timetable', component: TeacherTimetable },
  { path: '/classroom-timetable', component: ClassroomTimetable },
  { path: '/upload-file', component: UploadFile },
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
