export default{
    namespaced:true,
    state:{
        cart_num:5
    },
    getters:{

    },
    mutations:{
        setCartNum:(state,num) => state.cart_num += num
    },
    actions:{

    }
}