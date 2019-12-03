import React, { Component } from 'react'

import Footer from "../commen/Footer/Footer"
import Header from "../commen/Header/Header"

export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Header left={<div>&lt;</div>} title="首页" theme="light"></Header>
                <Footer></Footer>
            </div>
        )
    }
}
