import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import "./components/App.css"//样式
import "./mock/mock"//数据
import { BrowserRouter } from "react-router-dom"//资源管理器

import { Provider } from "react-redux"
import {store} from "./store/store"
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
