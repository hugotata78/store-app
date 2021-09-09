import React, {useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import CardProduct from "./CardProduct";

const Products = () => {

    const value = useContext(DataContext)
    const [products] = value.products
    

    return (
        <>
            <h1 className='title'>Products</h1>
            <div className='products'>
                {
                    products.length > 0 && products.map(product=>{
                        return(
                            <CardProduct product={product} key={product.id} />
                        )
                    })
                }
            </div>
        </>

    )
}

export default Products