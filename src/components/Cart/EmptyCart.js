import React from "react";
import { useHistory } from "react-router";
import { useContext } from "react/cjs/react.development";
import { DataContext } from "../../Context/DataProvider";

const EmptyCart = ()=>{

    const value = useContext(DataContext)
    const [menu,setMenu] = value.menu
    const history = useHistory()

    const toogleFalse = () => {
        setMenu(false)
        history.push('/products')
    } 

    return(
        <div className='empty-cart'>
            <h2>Your cart is empty</h2>
            <p>If you want to add products, go to the Products section!</p>
            <button className='btn' onClick={toogleFalse}>Go to Products</button>
        </div>
    )
}

export default EmptyCart