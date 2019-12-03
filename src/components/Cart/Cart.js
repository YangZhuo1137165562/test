import React, { Component } from 'react'

import Footer from "../commen/Footer/Footer"
import Header from "../commen/Header/Header"
import { connect } from 'react-redux'

import { addCount_action, subCount_action, checked_action,allcheck_action } from "../../store/store"

class Cart extends Component {
    render() {
        return (
            <div className="cart-page">
                <Header title="购物车" left={<span onClick={() => { this.props.history.go(-1) }}>&lt;</span>}></Header>
                <div className="cart-main">
                    {
                        this.props.list.allList.length > 0 ?
                            this.props.list.allList.map((item, index) => {
                                return (
                                    <div className="items" key={item.id}>
                                        <input type="checkbox" checked={item.ischeck} onChange={() => { this.props.checkedFn(item) }} />
                                        <div className="left">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="right">
                                            <p>{item.title}</p>
                                            <p>¥：{item.price}</p>
                                            <p>用户：{item.phone}</p>
                                        </div>
                                        <div className="oper">
                                            <span className="btn" onClick={() => { this.props.subCountFn(item.id) }}>-</span>
                                            <span>{item.count}</span>
                                            <span className="btn" onClick={() => { this.props.addCountFn(item.id) }}>+</span>
                                        </div>
                                    </div>
                                )
                            }) :
                            <div className="kong">购物车还空空如也！！！</div>
                    }
                </div>
                <div className="carfooter">
                    {/* 用id控制点字一样能选中 */}
                    <input type="checkbox" id="zhong"  checked={this.props.allchecked} onChange={()=>{this.props.allcheck()}} />
                    <label htmlFor="zhong">
                        全选
                    </label>
                    &nbsp;
                    &nbsp;
                共：<span>{
                    this.props.list.allList.reduce((total,item)=>{
                        console.log(item.count,"count");
                        if(item.ischeck){//选中状态的基础上处理总件数据，判断放在计算时，return的时候切记得return 0
                            return total+item.count*1
                        }else{
                            return total+0
                        }
                    },0)
                    }</span>件
                    &nbsp;
                    总价：<span>
                        {
                            this.props.list.allList.reduce((total,item)=>{
                                if(item.ischeck){
                                    return total+item.count*1*item.price*1
                                }else{
                                    return total+0
                                }
                            },0)
                        }
                        </span>元
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            list: state,
            allchecked:state.allcheck
        }
    },
    (dispatch) => {
        return {
            addCountFn(id) {
                dispatch(addCount_action(id))
            },
            subCountFn(id) {
                dispatch(subCount_action(id))
            },
            checkedFn(item) {//控制单个是否选中true或false
                dispatch(checked_action(item))
            },
            allcheck(){//全选，不用传参
                dispatch(allcheck_action())
            }
        }
    }
)(Cart)
