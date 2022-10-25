import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import Main from '@/views/Main.vue';
import Profile from '@/views/Profile.vue';
import Article from "@/views/Article";
import Editor from "@/views/Editor";
const routes = [
  {path:'/login',component:Login},
  {path:'/signup',component:Signup},
  {path:'/',component:Main},
  {path:'/profile',component:Profile},
  {path:'/article',component:Article},
  {path:'/editor',component:Editor}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
