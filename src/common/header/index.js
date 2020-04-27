import React from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store';
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
    focused: state.header.get('focused') 
  }
}
//方法写在里面
const mapDispatchToProps = (dispatch) => {
  return {
    hanldeInputFocus(){
      dispatch(actionCreators.searchFocus());
    },
    hanldeInputBlur(){
      dispatch(actionCreators.searchBlur());
    }    
  }
}
//ui组件 header
//容器组件 connect 处理数据和逻辑
export default connect(mapStateToProps, mapDispatchToProps) (Header);