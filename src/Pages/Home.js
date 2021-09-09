import React from 'react'
import { Link } from 'react-router-dom'
import home from '../images/inicio.jpg'


const Home = () => {
    return (
        <div className='Home'>
            <Link to='/'>
                <h1>Home</h1>
            </Link>
            <Link to='/products'>
                <h1>Products</h1>
            </Link>
            <img src={home} alt='home'/>
        </div>
    )
}

export default Home