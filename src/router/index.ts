import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'

// Lazy Loaded Imports
const LoginView = () => import('../../src/views/Login.vue')
const SignupView = () => import('../../src/views/Signup.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/login', component: LoginView },
  { path: '/signup', component: SignupView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
