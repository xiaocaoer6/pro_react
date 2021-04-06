import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import store from '@/redux/store' // 全局 引入redux仓库
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    {/* 全局引入store,从根组件中传入,其他组件需要就继续往下传递 */}
    <App store={store} />
  </BrowserRouter>,
  document.getElementById('root')
);

// redux中存储的数据改变时不会自定更新页面,所以这里设置监听,状态数据变化就更新页面
store.subscribe(()=>{
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  );
  
})

serviceWorker.unregister();
