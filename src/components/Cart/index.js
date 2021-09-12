import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataProvider'
import EmptyCart from './EmptyCart'
import ListProducts from './ListProducts'




const Cart = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [cart, setCart] = value.cart
    const [totalPrice, seTotalPrice] = value.totalPrice
    const show2 = menu ? 'cart_container show' : 'cart_container'
    const show1 = menu ? 'carts show' : 'carts'

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
    const subtract = (e, id, index) => {
        e.preventDefault()
        cart.forEach(item => {
            if (item.id === id) {
                item.cantidad <= 1 ? removeItem(e, id, index) : item.cantidad -= 1
                setCart([...cart])
            }
        })
    }

    const add = (e, id, index) => {
        e.preventDefault()
        cart.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1
                setCart([...cart])
            }
        })
    }


    return (
        <div className={show1}>
            {!cart.length && <EmptyCart show2={show2} />}
            {
                cart.length &&
                <ListProducts
                    cart={cart} 
                    totalPrice={totalPrice}
                    show2={show2}
                    toogleFalse={toogleFalse}
                    removeItem={removeItem}
                    subtract={subtract}
                    add={add}
                />
            }
        </div>
    )
}

export default Cart