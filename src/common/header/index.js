import React, { Component } from 'react';
import { connect } from 'react-redux'
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
const Header = (props)=>{
  return(
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
        in={props.focused}
        timeout={200}
        classNames = "slide"            
        >
          <NavSearch
            className = {props.focused ? 'focused':''}
            onFocus = {props.hanldeInputFocus}
            onBlur = {props.hanldeInputBlur}
          ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe622;</i>
      </SearchWrapper>
    </Nav>
    <Addition>
      <Button className="writing"><i className="iconfont">&#xe70d;</i>写文章</Button>
      <Button className="reg">注册</Button>
    </Addition>
  </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    //仓库里的focused
    focused: state.focused  
  }
}
//方法写在里面
const mapDispatchToProps = (dispatch) => {
  return {
    hanldeInputFocus(){
      const action = {
        type: 'search_focus'
      };
      dispatch(action)
    },
    hanldeInputBlur(){
      const action = {
        type: 'search_blur'
      };
      dispatch(action)
    }    
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Header);