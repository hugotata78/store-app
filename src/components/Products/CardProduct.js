import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider";

const CardProduct = ({ product }) => {

    const value = useContext(DataContext)
    const add = value.add
    
    return (
        <div className='product'>
            <Link to={`/product/${product.id}`}>
                <div className='product_img'>
                    <img src={product.image.default} alt='img' />
                </div>
            </Link>
            <div className='product_footer'>
                <h1>{product.title}</h1>
                <p>{product.category}</p>
                <p className='price'>{product.price}</p>
            </div>
            <div className='btn_container'>
                <button className='btn' onClick={()=>add(product.id)}>
                    Add to Cart
                </button>
                <div>
                    <Link to={`/product/${product.id}`} className='btn'>
                        View
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardProduct