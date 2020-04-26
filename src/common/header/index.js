import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'
//任何组件开头都要大写
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
    this.hanldeInputFocus = this.hanldeInputFocus.bind(this)
    this.hanldeInputBlur = this.hanldeInputBlur.bind(this)
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe602;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition 
            in={this.state.focused}
            timeout={200}
            classNames = "slide"            
            >
              <NavSearch
                className = {this.state.focused ? 'focused':''}
                onFocus = {this.hanldeInputFocus}
                onBlur = {this.hanldeInputBlur}
              ></NavSearch>
              </CSSTransition>
              <i className={this.state.focused ? 'focused iconfont':'iconfont'}>&#xe622;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing"><i className="iconfont">&#xe70d;</i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  hanldeInputFocus(){
    this.setState({
      focused: true
    })
  }
  hanldeInputBlur(){
    this.setState({
      focused: false
    })
  }
}


export default Header;