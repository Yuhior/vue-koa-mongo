import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:''
  },
  strict:true, // 使用严格模式
  mutations: {
    setUserToken(state,token){
      //alert(token);
      state.token= token;
    }
  },
  actions: {},
  modules: {}
});
