import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import Main from '@/views/Main.vue';
const routes = [
  {
    path:'/login',component:Login
  },
  {
    path:'/signup',component:Signup
  },
  {
    path:'/',component:Main
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
