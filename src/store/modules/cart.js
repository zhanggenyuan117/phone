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