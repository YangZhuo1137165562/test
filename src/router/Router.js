import React, { Component } from 'react'

import {Switch,Route,Redirect} from "react-router-dom"

import Home from "../components/Home/Home"
import Allgood from "../components/Allgood/Allgood"
import Order from "../components/Order/Order"
import Cart from "../components/Cart/Cart"
import My from "../components/My/My"
import Detail from "../components/Detail/Detail"

export default class Router extends Component {//一级路由配置表
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/allgood" component={Allgood}></Route>
                <Route path="/order" component={Order}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/my" component={My}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        )
    }
}
