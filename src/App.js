import React from 'react';
import { Switch, Link , Route} from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Admin from './pages/admin'
import Login from './pages/login'
import './App.less';

function App() {
  return (
    <div className="App">
      {/* 
      一级路由 ,多个Route要用Switch包裹起来,并且要在最后写redirect
      */}
      <Switch>
        <Route path="/login" component={Login} ></Route>
        <Route path="/admin" component={Admin} ></Route>
        <Redirect to="login" />
      </Switch>
    </div>
  );
}

export default App;
