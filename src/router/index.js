import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import Main from '@/views/Main.vue';
import Profile from '@/views/Profile.vue';
const routes = [
  {
    path:'/login',component:Login
  },
  {
    path:'/signup',component:Signup
  },
  {
    path:'/',component:Main
  },
  {
    path:'/profile',component:Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
