import React, { Component } from 'react'

import { NavLink } from "react-router-dom"

export default class Footer extends Component {//封装底部公共组件
    render() {
        return (
            <div className="footer">
                <NavLink to="/home">
                    <img src="https://dummyimage.com/20x20" alt="" />
                    首页</NavLink>
                <NavLink to="/allgood">
                    <img src="https://dummyimage.com/20x20" alt="" />
                    所有商品</NavLink>
                <NavLink to="/order">
                    <img src="https://dummyimage.com/20x20" alt="" />
                    最新成交</NavLink>
                <NavLink to="/cart">
                    <img src="https://dummyimage.com/20x20" alt="" />
                    购物车</NavLink>
                <NavLink to="/my">
                    <img src="https://dummyimage.com/20x20" alt="" />
                    我的</NavLink>
            </div>
        )
    }
}
