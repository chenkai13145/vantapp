import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import user from './module/user'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
     user,
    },
    getters,
})
