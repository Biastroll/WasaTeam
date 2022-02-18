import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import InputType from '../views/InputType.vue'
import Api from '../views/Api.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: 'Online test'}
  },
  {
    path: '/inputType',
    name: 'InputType',
    component: InputType,
    meta: {
        title: 'Change the input'}
  },
  {
    path: '/api',
    name: 'Api',
    component: Api,
    meta: {
        title: 'Api(json)'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from) => {
  from.meta.title = document.title;
  if (to.meta.title) {
      document.title = to.meta.title
  }
})

export default router
