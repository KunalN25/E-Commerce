import React, {useState, useEffect} from 'react'
import './product.css'
// import { useCart } from './../Context/CartContext';
import ProductItem from './ProductItem';

export default function Products() {
    
    // const cart= useCart()

    const [products]=useState([
        {
            id:1000,
            name:'mobile',
            price:300,
            imageURL:'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'
        },
        {
            id:1001,
            name:'laptop',
            price:500,
            imageURL:'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'

        },
        {
            id:1002,
            name:'computer',
            price:750,
            imageURL:'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'
        },
        {
            id:1003,
            name:'headphone',
            price:175,
            imageURL:'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'
        },
        {
            id:1004,
            name:'headphone',
            price:23,
            imageURL:'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'
        },
        {
            id:1005,
            name:'mouse',
            price:300,
            imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEo1obGlZQVj8kLLYnQxCN8RxIdpbYfI89Tw&usqp=CAU'
        },
        {
            id:1006,
            name:'keyboard',
            price:500,
            imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEo1obGlZQVj8kLLYnQxCN8RxIdpbYfI89Tw&usqp=CAU'

        },
        {
            id:1007,
            name:'printer',
            price:750,
            imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEo1obGlZQVj8kLLYnQxCN8RxIdpbYfI89Tw&usqp=CAU'
        },
        {
            id:1008,
            name:'fax',
            price:175,
            imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEo1obGlZQVj8kLLYnQxCN8RxIdpbYfI89Tw&usqp=CAU'
        },
        {
            id:1009,
            name:'speaker',
            price:23,
            imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEo1obGlZQVj8kLLYnQxCN8RxIdpbYfI89Tw&usqp=CAU'
        },
        
        ])
    const [arrange, setArrange]=useState([])
    //Arrange array contains the order in which products are arranged

    useEffect(()=> {
        // const products=   
    
        const arrange=[]
        for(let i=0;i<products.length;i+=3){
            arrange.push(i)
        }
        // addNewProducts(products)
        setArrange(arrange)

        //Disable the cart productElements
        // const productElements=document.getElementsByClassName("add-btn")

        // if(cart)
        //     cart.forEach((product)=> {
        //         console.log(productElements[products.indexOf(product)])
        //         productElements[products.indexOf(product)].disabled=true;
             
        //     })

        // //console.log(productElements[3])

    },[products.length])

    
    //  console.log(arrange)

    
    
    return (
        <div className='d-flex flex-column'>
                

            { arrange.map((element,eleidx)=> 
                <div key={eleidx} className='d-flex flex-row p-4'>
                    { products.slice(element,element+3).map((product,index)=>
                            
                        <ProductItem key={product.id} 
                                     product={product}
                                     index={element+index} 
                                     />
                    )}
                
                </div>
           
            )}
            
    
    
        </div>
        )
}
