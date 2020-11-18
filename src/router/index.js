import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home'
    },
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/app',
    name: 'App',
    meta: {
      title: 'App'
    },
    component: () => import('../components/main-layout/MainLayout.vue')
  }, 
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login'
    },
    component: () => import('../components/login/Login.vue')
  }, 
  {
    path: '/user',
    name: 'User',
    meta: {
      title: 'User'
    },
    component: () => import('../views/UserPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
