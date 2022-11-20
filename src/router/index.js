import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import Main from '@/views/Main.vue';
import Profile from '@/views/Profile.vue';
import Article from "@/views/Article";
import Editor from "@/views/Editor";
import ForgotPassword from "@/views/ForgotPassword";
import Admin from "@/views/Admin";

const routes = [
  {
    path:'/login',
    name: "Login",
    component:Login,
    meta: {
      title: "Login",
      requiresAuth: false,
    }
  },
  {
    path:'/signup',
    name: "Signup",
    component:Signup,
    meta: {
      title: "Signup",
      requiresAuth: false,
    }
  },
  {
    path:'/',
    name: "Home",
    component:Main,
    meta: {
      title: "Home",
      requiresAuth: false,
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta: {
      title: "Home",
      requiresAuth: true,
    }
  },
  {
    path:'/article',
    component:Article,
    meta: {
      title: "Article",
      requiresAuth: false,
    }
  },
  {
    path:'/editor',
    name: "Editor",
    component:Editor,
    meta: {
      title: "Editor",
      requiresAuth: false,
    }
  },
  {
    path:'/forgot-password',
    name: "ForgotPassword",
    component:ForgotPassword,
    meta: {
      title: "Forgot Password",
      requiresAuth: false,
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: "Admin",
      requiresAuth: true,
      requiresAdmin: true,
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} ;
  next();
});*/
/*router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;
  let admin = null;
  if (user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      if (to.matched.some((res) => res.meta.requiresAdmin)) {
        if (admin) {
          return next();
        }
        return next({ name: "Home" });
      }
      return next();
    }
    return next({ name: "Home" });
  }
  return next();
});*/
export default router