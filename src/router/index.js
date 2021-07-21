import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('@/views/Details.vue'),
    props: true
  },
  {
    path: '/your-picks',
    name: 'Your Picks',
    component: () => import('@/views/YourPicks.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
