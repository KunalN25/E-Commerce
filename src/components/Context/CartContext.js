import React, {useContext, useState} from 'react'
import db from '../../config/firebase'


const CartContext=React.createContext()
const AddToCartContext=React.createContext()

export function useCart() {
    return useContext(CartContext)
}

export function useAddToCart() {
    return useContext(AddToCartContext)
}
// Context Provider
export default function CartContextProvider({children}) {
    


    const [cart]=useState([])
    
    // useEffect(()=> {
    //     setCart()
    // },[])

    function addProductToCart(product) {
        console.log('Product addded', product)
        db.collection('cart').add({product})
    }

    //Edit function to increase count of [product]

    
    
    return (
        <CartContext.Provider value={cart}>
            <AddToCartContext.Provider value={addProductToCart}>
                {children}

            </AddToCartContext.Provider>
        </CartContext.Provider>
    )
}
