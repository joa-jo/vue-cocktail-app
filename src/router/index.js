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
    path: '/cocktails/:id',
    name: 'Cocktails',
    component: () => import('@/views/Cocktails.vue'),
    props: true
  },
  {
    path: '/your-picks',
    name: 'YourPicks',
    component: () => import('@/views/YourPicks.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
