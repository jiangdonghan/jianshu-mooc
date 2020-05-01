import React from 'react';
import { GlobalStyle } from './style.js';
import {BrowserRouter, Route} from 'react-router-dom'
import { GlobalIconFontStyle } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Header from './common/header'
import store from './store'
function App() {
  return (
    <Provider store={store}>
       <GlobalStyle />
       <GlobalIconFontStyle />        
        <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
        </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
