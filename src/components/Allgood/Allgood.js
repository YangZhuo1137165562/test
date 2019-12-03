import React, { Component } from 'react'

import {Switch,Route,Redirect,NavLink } from "react-router-dom"

import Footer from "../commen/Footer/Footer"
import Header from "../commen/Header/Header"
import Axios from 'axios'

import Navitem from "./ItemAll/ItemAll"

export default class Allgood extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        Axios.get("/allgoodmock").then((res) => {
            this.setState({
                list: res.data.allgooddata
            })
        })
    }
    render() {
       
        return (
            <div className="allgood-page">
                {/* 头部   */}
                <Header title="所有商品"></Header>


                {/* 主体 */}
                <div className="main">
                    <div className="left">
                        {
                            //  console.log(this.state.list.allgooddata)
                            this.state.list.length>0&&
                            this.state.list.map((item, index) => {
                                return (
                                    //动态路由传参
                                    <NavLink className="nav-item" key={index} to={{ pathname: "/allgood/" + index, state: this.state.list }}>{item.allNav}</NavLink>
                                )
                            })
                        }
                    </div>
                    <div className="right">
                        <Switch>
                            <Route path="/allgood/:index" component={Navitem}></Route>
                            {
                                this.state.list.length>0&&
                                <Redirect to={{pathname:"/allgood/0",state:this.state.list}}></Redirect>
                            }
                        </Switch>
                    </div>
                </div>


                {/* 底部 */}
                <Footer></Footer>
            </div>
        )
    }
}
