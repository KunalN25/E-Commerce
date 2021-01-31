import React from 'react'

export default function ProductViewData({product}) {
    return (
        <div>
            <img src={product.imageURL} alt={product.name}
                style= {{
                    width:'150px',
                    borderRadius:'50%'
                }}></img>
            
            <div>{product.name}  Rs. {product.price}</div> 
        </div>
    )
}
