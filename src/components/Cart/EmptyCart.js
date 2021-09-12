import React from "react";
import { useHistory } from "react-router";
import { useContext } from "react/cjs/react.development";
import { DataContext } from "../../Context/DataProvider";

const EmptyCart = ({ show2 }) => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const history = useHistory()

    const toogleFalse = () => {
        setMenu(false)
    }

    const gotToProducts = ()=>{
        setMenu(false)
        history.push('/products')
    }

    return (
        <div className={show2}>
            <div className='cart_close' onClick={toogleFalse}>
                <box-icon name='x'></box-icon>
            </div>
            <div className='cart_center'>
                <div className='empty-cart'>
                    <h2>Your cart is empty</h2>
                    <p>If you want to add products, go to the Products section!</p>
                    <button className='btn' onClick={gotToProducts}>Go to Products</button>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart