import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Signup from '@/components/auth/Signup'

Vue.use(Router)

export default new Router({
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
<<<<<<< HEAD
    }
=======
    },
>>>>>>> fbdb8db9b2c74c20b0dc1724719714be5f816e17
  ]
})
