import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import Experience from '../views/Experience.vue'
import Portfolio from '../views/Portfolio.vue'
// import Skills from '../views/Skills.vue'
import RwdDesign from '../views/RwdDesign.vue'
import RwdLayout from '../views/RwdLayout.vue'
import RwdFluid from '../views/RwdFluid.vue'
import RwdHamburger from '../views/RwdHamburger.vue'
import JavaScript from '../views/JavaScript.vue'

// import GuessNumber from '../views/GuessNumber.vue'
// import TodoList from '../views/TodoList.vue'

import UiDesign from '../views/UiDesign.vue'
import UiForm from '../views/UiForm.vue'
import Spotlife from '../views/Spotlife.vue'
import Drinks from '../views/Drinks.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/experience',
  //   name: 'Experience',
  //   component: Experience
  // },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    children: [
      {
        path: '/portfolio/rwd_design',
        name: 'RwdDesign',
        component: RwdDesign,
        children: [
          {
            path: '/portfolio/rwd_design/rwd_layout',
            name: 'RwdLayout',
            component: RwdLayout
          },
          {
            path: '/portfolio/rwd_design/rwd_fluid',
            name: 'RwdFluid',
            component: RwdFluid
          },
          {
            path: '/portfolio/rwd_design/rwd_hamburger',
            name: 'RwdHamburger',
            component: RwdHamburger
          }
        ]
      },
      {
        path: '/portfolio/javascript',
        name: 'JavaScript',
        component: JavaScript,
        // children: [
        //   {
        //     path: '/portfolio/javascript/guessnumber',
        //     name: 'GuessNumber',
        //     component: GuessNumber
        //   },
        //   {
        //     path: '/portfolio/javascript/todolist',
        //     name: 'TodoList',
        //     component: TodoList
        //   }
        // ]
      },
      {
        path: '/portfolio/ui_design',
        name: 'UiDesign',
        component: UiDesign,
        children: [
          {
            path: '/portfolio/ui_design/form',
            name: 'UiForm',
            component: UiForm
          },
          {
            path: '/portfolio/ui_design/Spotlife',
            name: 'Spotlife',
            component: Spotlife
          },
          {
            path: '/portfolio/ui_design/drinks',
            name: 'Drinks',
            component: Drinks
          }
        ]
      }
    ]
  },
  // {
  //   path: '/skills',
  //   name: 'Skills',
  //   component: Skills
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
