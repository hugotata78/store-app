import React, { useState } from "react";
import Cart from ".";

const CartItem = ({item, index, removeItem }) => {

    const [quantity,setQuantity]= useState(1)

    const subtract = (e,id,index)=>{
        e.preventDefault()
        quantity <= 1 ? removeItem(e,id,index) : setQuantity(quantity - 1)
    }

    const add = (e)=>{
        e.preventDefault()
        quantity < item.cantidad ? setQuantity(quantity + 1) : alert('No more products can be added')
    }
    return (
        <div className='cart_item'>
            <img src={item.image.default} alt='img' />
            <div>
                <h3>{item.title}</h3>
                <p className='price'>${item.price}</p>
            </div>
            <div>
                <box-icon name='up-arrow' type='solid' onClick={e=>add(e)}></box-icon>
                <p className='quantity'>{quantity}</p>
                <box-icon name='down-arrow' type='solid' onClick={e=>subtract(e,item.id,index)}></box-icon>
            </div>
            <div className='remove' onClick={e=>removeItem(e,item.id,index)}>
                <box-icon name='trash'></box-icon>
            </div>
        </div>
    )
}

export default CartItem