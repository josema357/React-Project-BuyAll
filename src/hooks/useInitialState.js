import { useState } from "react";

const initialState={
    cart: [],
}

const useInitialState=()=>{
    const [state,setState]=useState(initialState);
    const [showCart,setShowCart]=useState(false)

    const addToCart=(payload)=>{
        setState({
            ...state,
            cart: [...state.cart,payload]
        })
    }
    const toogleOrdersCart=()=>{
        setShowCart(!showCart);
    }
    return {
        state,
        addToCart,
        showCart,
        toogleOrdersCart
    }
}

export default useInitialState;