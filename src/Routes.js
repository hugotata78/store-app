import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home'
import ListProducts from "./Pages/ListProducts";


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={ListProducts} />
        </Switch>
    )
}

export default Routes