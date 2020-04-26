import React, { Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { GlobalIconFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header'
function App() {
  return (
    <Fragment>
       <GlobalStyle />
       <GlobalIconFontStyle />
       <Header />
    </Fragment>
  );
}

export default App;
