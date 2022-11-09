import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TermOne from '../components/terms/TermOne'  
import TermTwo from '../components/terms/TermTwo'  
import TermThree from '../components/terms/TermThree'  
import TermFour from '../components/terms/TermFour'  
import TermFive from '../components/terms/TermFive'  
import TermSix from '../components/terms/TermSix'  



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/terms-1',
    name: 'TermOne',
    component: TermOne
  },
  {
    path: '/terms-2',
    name: 'TermTwo',
    component: TermTwo
  },
  {
    path: '/terms-3',
    name: 'TermThree',
    component: TermThree
  },
  {
    path: '/terms-4',
    name: 'TermFour',
    component: TermFour
  },
  {
    path: '/terms-5',
    name: 'TermFive',
    component: TermFive
  },
  {
    path: '/terms-6',
    name: 'TermSix',
    component: TermSix
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router