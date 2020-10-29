/*
 * @Author: zhang_gen_yuan
 * @Date: 2020-10-29 16:42:28
 * @LastEditTime: 2020-10-29 16:48:04
 * @Description: 
 */
export default{
    namespaced:true,
    state:{
        cart_list:[]
    },
    getters:{

    },
    mutations:{
        setCartNum:(state,item) => state.cart_list.push(item) 
    },
    actions:{

    }
}





