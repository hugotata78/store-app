import React, { useState } from "react";
import Cart from ".";

const CartItem = ({item, index, removeItem, add, subtract }) => {

    

    
    return (
        <div className='cart_item'>
            <img src={item.image.default} alt='img' />
            <div>
                <h3>{item.title}</h3>
                <p className='price'>${item.price}</p>
            </div>
            <div>
                <box-icon name='up-arrow' type='solid' onClick={e=>add(e,item.id,index)}></box-icon>
                <p className='quantity'>{item.cantidad}</p>
                <box-icon name='down-arrow' type='solid' onClick={e=>subtract(e,item.id,index)}></box-icon>
            </div>
            <div className='remove' onClick={e=>removeItem(e,item.id,index)}>
                <box-icon name='trash'></box-icon>
            </div>
        </div>
    )
}

export default CartItem