import React from 'react';
import { GlobalStyle } from './style.js';
import { GlobalIconFontStyle } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux'
import Header from './common/header'
import store from './store'
function App() {
  return (
    <Provider store={store}>
       <GlobalStyle />
       <GlobalIconFontStyle />
       <Header />
    </Provider>
  );
}

export default App;
