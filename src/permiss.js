

router.beforeEach((to, from, next)=>{
    localStorage.getItem('user')?next('/home'):next('/login')
    if(localStorage.getItem('user')){
      if(to.path==='/login'||to.path==='/regester'){
        next('/home')
      }
    }else{
      next('/login')
    }
})