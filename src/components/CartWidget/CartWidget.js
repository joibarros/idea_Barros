import React from 'react'
import Cart from "../img/shopping-cart.svg"



function CartWidget({cartNumber, color}) {
    
    return (
        <div>
            <img src={Cart} className = "shoppingCart" width = "35px"/>
      
            <span style={{color:color}}>{cartNumber}</span>
        </div>
    )
}

export default CartWidget



