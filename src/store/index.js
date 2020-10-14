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
