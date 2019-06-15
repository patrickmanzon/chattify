import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Signup from '@/components/auth/Signup'
import Home from '@/components/Home/Home'
import Signin from '@/components/auth/Signin'
import firebase from 'firebase'

Vue.use(Router)

const routes = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
    },
  ]
})


routes.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    console.log()
    if(!firebase.auth().currentUser){
      next({ name: 'Signup' })
    }else{
      next()
    }
  }else{
    next()
  }
})

export default routes