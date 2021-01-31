import React from 'react'
import {useAddToCart} from './../Context/CartContext';
import ProductViewData from './ProductViewData'


export default function ProductItem({  product,index }) {

    const addProductToCart=useAddToCart()

    function addProduct(product) {
            product.count=1
            // console.log(product)
            addProductToCart(product)
            const productElements=document.getElementsByClassName("add-btn")
            // console.log(productElements)
            productElements[index].disabled=true;   
    }
    return (
        <div>
            <ProductViewData product={product}></ProductViewData>
            
            <button className="add-btn" 
                    onClick={()=> addProduct(product)}>
                Add+ 
            </button>   

        </div>
    )
}
