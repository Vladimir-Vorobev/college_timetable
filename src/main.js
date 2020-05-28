import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

import {STORE} from '../store'

import MainPage from './components/MainPage.vue'
import GroupsTimetable from './components/GroupsTimetable.vue'
import TeachersTimetable from './components/TeachersTimetable.vue'
import ClassroomsTimetable from './components/ClassroomsTimetable.vue'
import Group from './components/Group.vue'
import Teacher from './components/Teacher.vue'
import Classroom from './components/Classroom.vue'
import UploadFile from './components/UploadFile.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: MainPage },
  { path: '/groups-timetable', component: GroupsTimetable },
  { path: '/teachers-timetable', component: TeachersTimetable },
  { path: '/classrooms-timetable', component: ClassroomsTimetable },
  { path: '/groups-timetable/:id', component: Group },
  { path: '/teachers-timetable/:id', component: Teacher },
  { path: '/classrooms-timetable/:id', component: Classroom },
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
