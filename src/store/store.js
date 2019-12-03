import { createStore } from "redux"


// 定义action
function add_action(item) {
    return {
        type: "ADD_ACTION",
        item
    }
}
function addCount_action(id) {//加
    return {
        type: "ADDCOUNT_ACTION",
        id
    }
}
function subCount_action(id) {//减
    return {
        type: "SUBCOUNT_ACTION",
        id
    }
}
function checked_action(item) {//单个选中状态
    return {
        type: "CHECKED_ACTION",
        item
    }
}
function allcheck_action() {//全选
    return {
        type: "ALLCHECK_ACTION"
    }
}

// 定义reducer
var data = {
    allList: [],
    allcheck:false//一进页面为空
}
function reducer(state = data, action) {
    //深拷贝
    state = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case "ADD_ACTION"://数据增加
            var findItem = state.allList.find((item) => { return item.id === action.item.id })
            if (!findItem) {
                action.item.count=1;//控制数量
                action.item.ischeck=false;//控制点击的时候保存代码识别的选中状态    
                state.allList.push(action.item)
            }
            return state;
        case "ADDCOUNT_ACTION"://数量增加
            var findItemss = state.allList.find((item) => { return item.id === action.id })
            if (findItemss) {
                findItemss.count++;
            }
            return state;
        case "SUBCOUNT_ACTION"://数量减
            var findItems = state.allList.find((item) => { return item.id === action.id })
            if (findItems) {
                findItems.count--;
            }
            if (findItems.count < 1) {
                findItems.count = 1;
                var del = window.confirm('是否删除');
                if (del) {
                    state.allList.splice(action.item, 1)
                    //维护全选状态（减为1的时候用）
                    state.allcheck=state.allList.every((item)=>{return item.ischeck})
                }
            }
            return state;
        case "CHECKED_ACTION"://单项选中与取消  控制
           var findItemm =state.allList.find((item)=>{
                return item.id===action.item.id
            })//找到就让当前状态取反

            if(findItemm){//用当前的这一项去取反
                findItemm.ischeck=!findItemm.ischeck
            }
            //维护全选状态（在单选的时候用）
            state.allcheck=state.allList.every((item)=>{return item.ischeck})
            return state;
        case "ALLCHECK_ACTION"://全选
          state.allcheck=!state.allcheck//改变自身状态，前提有一个变量
          state.allList.forEach((item)=>{item.ischeck=state.allcheck})//for循环遍历赋值
            return state;
        default:
            return state;
    }
}



// 创建store
var store = createStore(reducer)

//导出
export {
    store,
    add_action,
    addCount_action,
    subCount_action,
    checked_action,
    allcheck_action
}