import React from 'react';
import { Button } from 'antd';
import ReduxTest from 'pages/reduxTest/index'
import './App.less';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Learn React</h1>
          <Button type="primary">我是antd组件哦</Button>
          <ReduxTest store={props.store} ></ReduxTest>
      </header>
    </div>
  );
}

export default App;
