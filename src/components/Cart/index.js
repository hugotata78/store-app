import React, { useContext } from 'react'
import img03 from '../../images/img03.jpg'
import { DataContext } from '../../Context/DataProvider'
import CartItem from './CartItem'
import { useState } from 'react/cjs/react.development'




const Cart = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [cart, setCart] = value.cart
    

    const show1 = menu ? 'carts show' : 'carts'
    const show2 = menu ? 'cart_container show' : 'cart_container'

    const toogleFalse = () => {
        setMenu(false)
    }

    const removeItem = (e, id, index) => {
        e.preventDefault()
        if (window.confirm('¿Está seguro de que desea eliminar el producto')) {
            cart.splice(index, 1)
            setCart([...cart])
        }
    }

    

    return (
        <div className={show1}>
            <div className={show2}>
                <div className='cart_close' onClick={toogleFalse}>
                    <box-icon name='x'></box-icon>
                </div>
                <h2>Your cart</h2>
                <div className='cart_center'>
                    {
                        cart.length && cart.map((item, index) => {
                            return (
                                <CartItem
                                    item={item}
                                    key={item.id}
                                    index={index} removeItem={removeItem}
                                />
                            )
                        })
                    }
                </div>
                <div className='cart_footer'>
                    <h3>Total: $</h3>
                    <button className='btn'>Payment</button>
                </div>
            </div>
        </div>
    )
}

export default Cart