import React from 'react';
import { GlobalStyle } from './style.js';
import {BrowserRouter, Route} from 'react-router-dom'
import { GlobalIconFontStyle } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux'
import Header from './common/header'
import store from './store'
function App() {
  return (
    <Provider store={store}>
       <GlobalStyle />
       
       <GlobalIconFontStyle />
       <div>
        <Header />
        <BrowserRouter>
        <div>
          <Route path='/' exact render={()=><div>home</div>}></Route>
          <Route path='/detail' exact render={()=><div>detail</div>}></Route>
        </div>
        </BrowserRouter>
       </div>
    </Provider>
  );
}

export default App;
