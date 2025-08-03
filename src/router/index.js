import { createRouter, createWebHistory } from 'vue-router'

const GreetingPage = () => import('@/views/GreetingPageView.vue')
const HomePage = () => import('@/views/HomePageView.vue')
const AuthPage = () => import('@/views/AuthView.vue')
const RegisterPage = () => import('@/views/RegisterView.vue')
const LoginPage = () => import('@/views/LoginView.vue')

const routes = [
  { path: '/', component: GreetingPage },
  { path: '/map', component: HomePage },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      { path: 'register', component: RegisterPage },
      { path: 'login', component: LoginPage },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
