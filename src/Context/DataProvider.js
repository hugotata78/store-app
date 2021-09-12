import { createContext, useEffect, useState } from "react";
import data from '../Data'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [products, setProducts] = useState([])
    const [menu, setMenu] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(() => {
        const products = data.items
        !products ? setProducts([]) : setProducts(products)
    }, [])

    const add = (id)=>{
        const check = cart.every(item=>{
            return item.id !== id
        })

        if(check){
            const data = products.filter(product=>{
                return product.id === id
            })
            setCart([...cart,...data])
        }
        else{
            alert('The product is already added to the cart')
        }
    }

    useEffect(()=>{
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart){
            setCart(dataCart)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('dataCart',JSON.stringify(cart))
    },[cart])

    
    const value = {
        products: [products],
        menu: [menu, setMenu],
        add:add,
        cart: [cart, setCart]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}