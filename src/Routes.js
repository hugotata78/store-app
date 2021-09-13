import React from "react";
import { Switch, Route } from "react-router-dom";
import Details from "./components/Products/Details";
import Home from './Pages/Home'
import ListProducts from "./Pages/ListProducts";


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={ListProducts} />
            <Route path='/product/:id' component={Details} />
        </Switch>
    )
}

export default Routes