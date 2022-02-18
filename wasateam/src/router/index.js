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
        title: 'Online test',
        description: 'The index page of the online test.'}
  },
  {
    path: '/inputType',
    name: 'InputType',
    component: InputType,
    meta: {
        title: 'Change the input',
        description: 'You can change the type of input and the page will show you what you do with the input.'}
  },
  {
    path: '/api',
    name: 'Api',
    component: Api,
    meta: {
        title: 'Api(json)',
        description: 'Click the drop-down menu to get the json. Then, choose the name to get the information.'}
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
router.beforeEach((to) => {
  console.log(to.meta);
  let head = document.getElementsByTagName('head');
  let meta = document.createElement('meta');

  document.querySelector('meta[name="description"]').setAttribute('content',to.meta.description)
  meta.content = to.meta.content;
  head[0].appendChild(meta);
})

export default router
