import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



const arrRoutes=[
    {
      path: '/login',
      name: 'login',
      component: ()=>import('../views/loginReg/login')
    },
    {
      path: '/regester',
      name: 'regester',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/loginReg/regester')
    },
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/layout'),
      redirect:'/home',
      children:[
        {
          path: '/home',
          name: 'home',
          component: ()=>import('../views/home')
        },
        {
          path: '/me',
          name: 'me',
          component: ()=>import('../views/me/me')
        },
      ]
    },
  ]

  export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:arrRoutes
  })
