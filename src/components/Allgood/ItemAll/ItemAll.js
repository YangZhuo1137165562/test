import React, { Component } from 'react'

import { connect } from "react-redux"

import { add_action } from "../../../store/store"


// import "antd-mobile/dist/antd-mobile.css"//添加antd-mobile样式
// import { Toast } from "antd-mobile"//引入antd包
class ItemAll extends Component {
    render() {
        var list = this.props.history.location.state || []//接数据
        var index = this.props.match.params.index//接下标
        return (
            <div className="itemall">

                {
                    list.length > 0 &&
                    list[index].connect.map((item, index) => {
                        return (
                            <div className="items" key={index}>
                                <div className="imgs">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="list">
                                    <p>{item.title}</p>
                                    <p>¥：{item.price}</p>
                                    <p>{item.phone}</p>
                                </div>
                                <p className="add" onClick={() => {
                                    this.props.itemFn(item)
                                    // Toast.success("已经成功加入")
                                }}>加入</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            list: state
        }
    },
    (dispatch) => {
        return {
            itemFn(item) {
                dispatch(add_action(item))
            }
        }
    }
)(ItemAll)