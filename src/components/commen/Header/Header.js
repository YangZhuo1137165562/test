import React, { Component } from 'react'

export default class Header extends Component {
    render() {//头部组件
        return (
            //单项组件进行渲染，必须进行样式匹配
            <div className={`header ${this.props.theme==="light"?"light":""}`}>
                <span>{this.props.left}</span>
                <span>{this.props.title}</span>
                <span></span>
            </div>
        )
    }
}
