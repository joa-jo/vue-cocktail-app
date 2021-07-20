import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import YourPicks from '@/views/YourPicks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/your-picks',
    name: 'Your Picks',
    component: YourPicks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
