import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider";
import Nike from '../../images/Nike.jpg'

const Headers = ()=>{

    const value = useContext(DataContext)
    const [menu,setMenu]=value.menu
    const [cart,setCart] = value.cart

    const toogleMenu = ()=>{
        setMenu(!menu)
    }

    return(
        <header className='header'>
            <Link to='/'>
                <div className='logo'>
                    <img src={Nike} alt='Nike' width='150'/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
            </ul>
            <div className='cart' onClick={toogleMenu}>
                <box-icon name='cart'></box-icon>
                <span className='item_total'>{cart.length}</span>
            </div>
        </header>
    )
}

export default Headers