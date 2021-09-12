import React, { useContext } from "react";
import CartItem from './CartItem';
import { DataContext } from "../../Context/DataProvider";

const ListProducts = ({cart, totalPrice, show2,toogleFalse,removeItem,subtract,add}) => {

    
    return (
        <div className={show2}>
            <div className='cart_close' onClick={toogleFalse}>
                <box-icon name='x'></box-icon>
            </div>
            <h2>Your Cart</h2>
            <div className='cart_center'>

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
            <div className='cart_footer'>
                <h3>Total: ${totalPrice} </h3>
                <button className='btn'>Payment</button>
            </div>
        </div>



    )

}

export default ListProducts