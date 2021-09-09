import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider";

const CardProduct = ({ product }) => {

    const value = useContext(DataContext)
    const add = value.add
    
    return (
        <div className='product'>
            <a href='#'>
                <div className='product_img'>
                    <img src={product.image.default} alt='img' />
                </div>
            </a>
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
                    <a href='' className='btn'>
                        View
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardProduct