import { createContext, useEffect, useState } from "react";
import data from '../Data'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [products, setProducts] = useState([])
    const [menu, setMenu] = useState(false)
    const [cart, setCart] = useState([])
    const [totalPrice,setTotalPrice] = useState(0)

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
            const response = window.confirm('The product is already added to the cart!\nDo you want to add another item for this product?')
            if(response){
                cart.forEach(item => {
                    if (item.id === id) {
                        item.cantidad += 1
                        setCart([...cart])
                    }
                })
            }
        }
    }

    const getTotalPrice = ()=>{
        const res = cart.length === 0 ? 0 : cart.reduce((prev,index)=>{
            return prev + (index.price * index.cantidad)
        }, 0)

        return res
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

    useEffect(()=>{
        setTotalPrice(getTotalPrice())
    })
    
    const value = {
        products: [products],
        menu: [menu, setMenu],
        add:add,
        cart: [cart, setCart],
        totalPrice:[totalPrice,setTotalPrice]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}