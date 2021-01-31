import React, {useEffect,useState} from 'react'
import {useCart} from './Context/CartContext'
// import ProductItem from './Products/ProductItem';
import CartItem from './Products/CartItem';

export default function Cart() {

    const [arrange, setArrange]=useState([])

    const cart=useCart()

    useEffect(()=>{
        const arrange=[]
        for(let i=0;i<cart.length;i+=3){
            arrange.push(i)
        }
        setArrange(arrange)
        // console.log('Cart is')
        // console.log(cart)

    },[cart.length])

    return (
        <div  className='d-flex flex-column'>
            
            
            
            { arrange.map((element,eleidx)=> 
                <div key={eleidx} className='d-flex flex-row p-4'>
                    { cart.slice(element,element+3).map((cartItem,index)=>
                            
                        <CartItem key={index} 
                                  cartItem={cartItem} 
                        />
                    )}
                
                </div>
           
            )}
            

        </div>
    )
}
