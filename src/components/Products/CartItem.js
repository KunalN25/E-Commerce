import React from 'react'
import ProductViewData from './ProductViewData'

export default function CartItem({ cartItem }) {


    //implement edit functionality
    function decreaseCount(){
        // const count=cartItem.count
        // // console.log('Count is '+count)
        // if(count!==1) {
        //     count--;
            
        // }
    }

    function increaseCount(){
        
    }
    return (
        <div>
            <ProductViewData product={cartItem}></ProductViewData>
            <div>
                <button className="minus"
                        onClick={decreaseCount}>-</button>
                {cartItem.count }
                <button className="plus"
                        onClick={increaseCount}>+</button>
            </div>
            
            <button className="add-btn">
                Remove
            </button> 
        </div>
    )
}
