/*
 * @Author: zhang_gen_yuan
 * @Date: 2020-10-29 16:42:28
 * @LastEditTime: 2020-10-29 16:47:55
 * @Description: 
 */
import Vuex from 'vuex'
import persistedstate from 'vuex-persistedstate'
import cart from './modules/cart'
export default Vuex.createStore({
  plugins:[
    persistedstate()
  ],
  modules:{
    cart
  }
})



