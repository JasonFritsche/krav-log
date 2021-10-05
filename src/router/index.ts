import { createRouter, createWebHistory } from 'vue-router'
import Splash from '/src/views/Splash.vue'

// Lazy Loaded Imports
const LoginView = () => import('../../src/views/Login.vue')
const SignupView = () => import('../../src/views/Signup.vue')
const HomeView = () => import('../../src/views/Home.vue')

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: Splash
  },
  { path: '/login', component: LoginView },
  { path: '/signup', component: SignupView },
  { path: '/home', component: HomeView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
