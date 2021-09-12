import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataProvider'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'




const Cart = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [cart, setCart] = value.cart
    const [totalPrice,seTotalPrice] = value.totalPrice


    const show1 = menu ? 'carts show' : 'carts'
    const show2 = menu ? 'cart_container show' : 'cart_container'

    const toogleFalse = () => {
        setMenu(false)
    }

    const removeItem = (e, id, index) => {
        e.preventDefault()
        if (window.confirm('Are you sure you want to remove the product?')) {
            cart.splice(index, 1)
            setCart([...cart])
        }
    }
    const subtract = (e,id,index)=>{
        e.preventDefault()
        cart.forEach(item=>{
            if(item.id === id){
                item.cantidad <= 1 ? removeItem(e,id,index) : item.cantidad -= 1
                setCart([...cart]) 
            }
        })
    }

    const add = (e,id,index)=>{
        e.preventDefault()
        cart.forEach(item=>{
            if(item.id === id){
                item.cantidad += 1
                setCart([...cart]) 
            }
        })
    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className='cart_close' onClick={toogleFalse}>
                    <box-icon name='x'></box-icon>
                </div>
                {cart.length > 0 && <h2>Your cart</h2>}

                <div className='cart_center'>
                    {cart.length === 0 && <EmptyCart />}
                    {
                        cart.length && cart.map((item, index) => {
                            return (
                                <CartItem
                                    item={item}
                                    key={item.id}
                                    index={index}
                                    removeItem={removeItem}
                                    add={add}
                                    subtract={subtract}
                                />
                            )
                        })
                    }
                </div>
                {
                    cart.length > 0 && <div className='cart_footer'>
                        <h3>Total: ${totalPrice} </h3>
                        <button className='btn'>Payment</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart