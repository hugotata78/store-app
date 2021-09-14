import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { DataContext } from "../../Context/DataProvider";
import CardProduct from "./CardProduct";


const Details = () => {

    const value = useContext(DataContext)
    const [products] = value.products
    const add = value.add
    const { id } = useParams()
    const [details, setDetails] = useState([])
    const [url, setUrl] = useState(0)
    const [images, setImages] = useState('')

    useEffect(() => {
        products.forEach(item => {
            if (item.id === parseInt(id)) {
                setDetails(item)
                setUrl(0)
            }
        })
    }, [setDetails, id, products])

    useEffect(() => {
        const img1 = details && details.img1
        const img2 = details && details.img2
        const values = `${img1}${url}${img2}`
        setImages(values)

    }, [details, url])

    const handleInputChange = (e) => {
        const number = e.target.value.toString().padStart(2, '01')
        setUrl(number)
        console.log(url)
    }

    if (details.length < 1) return null;

    return (
        <div className='details'>
            <h2>{details.title}</h2>
            <p className='price'>${details.price}</p>
            <div className='grid'>
                <p className='new'>New</p>
                <div className='size'>
                    <select placeholder='size'>
                        <option value='1'>1</option>
                        <option value='1'>2</option>
                        <option value='1'>3</option>
                        <option value='1'>4</option>
                        <option value='1'>5</option>
                        <option value='1'>6</option>
                        <option value='1'>7</option>
                        <option value='1'>8</option>
                        <option value='1'>9</option>
                    </select>
                    <p>Size</p>
                </div>
            </div>
            <button onClick={()=>add(details.id)}>Add to Cart</button>
            {
                url !== 0 ?
                    <img src={images} alt='img' />
                    :
                    <img src={details.image.default} alt='img' />
            }
            <input type='range' min='1' max='36' value={url} onChange={handleInputChange} />
            <div className='description'>
                <p><b>Description: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <br/>
            <h2 className='related'>related products</h2>
            <div className='products'>
                {
                    products.map((product,index)=>{
                        if((index < 6 )&&(product.category === details.category)){
                            return(
                                <CardProduct product={product} key={product.id} />
                            )
                        }
                        
                    })
                }
            </div>
        </div>
    )
}

export default Details