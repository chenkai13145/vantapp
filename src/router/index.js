import Vue from 'vue'
import Router from 'vue-router'
import user from '../store/module/user'

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

      component: () => import('../views/loginReg/regester')
    },
    {
      path: '/putme',
      name: 'putme',

      component: () => import('../views/me/putme')
    },
    {
      path: '/fubu',
      name: 'fubu',
      component: ()=>import('../views/me/fubu')
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
        {
          path: '/history',
          name: 'history',
          component: ()=>import('../views/me/history')
        },
      ]
    },
]


 const router=new Router({
    mode:'hash',
    routes:arrRoutes
  })
router.beforeEach((to,from,next)=>{
    // console.log(store.getters.token)
  //  if(to.path!='/login')next('/login')
  if(to.path!='/login'&&!localStorage.getItem('user')){
    next('/login')
  }else{
    next()
  }
})
export default router;


