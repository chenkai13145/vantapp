const user={
    state:{
       token:'123',
       userinfo:JSON.parse(localStorage.getItem('user'))||{},
       type:JSON.parse(localStorage.getItem('type'))||'',
    },
    actions:{
       login({commit},data){
            commit('login',data)
       },
       layout({commit}){
          commit('layout')
       }
    },
    mutations:{
       login(state,data){
           state.userinfo=data
       },
       layout(state){
         state.userinfo={}
       }
    }
}
export default user