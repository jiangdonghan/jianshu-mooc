import React, { Component } from 'react';
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
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle
} from './style'
//任何组件开头都要大写
class Header extends Component{

  render(){
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
          in={this.props.focused}
          timeout={200}
          classNames = "slide"            
          >
            <NavSearch
              className = {this.props.focused ? 'focused':''}
              onFocus = {this.props.hanldeInputFocus}
              onBlur = {this.props.hanldeInputBlur}
            ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont':'iconfont'}>&#xe622;</i>
            {/* 聚焦显示，不聚焦不显示，show的参数为this.props.focused */}
            {this.getListArea()}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writing"><i className="iconfont">&#xe70d;</i>写文章</Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>      
    )
  }
  getListArea = () => {
    if(this.props.focused){
      return (
        <SearchInfo>
        <SearchInfoTitle>热门搜索
          <span>换一换</span>
        </SearchInfoTitle>
        <div className="list">
          {
            this.props.list.map((item)=>{
              return <a key={item}>{item}</a>
            })
          }
        </div>
      </SearchInfo>
      )
    }else{
      return null;
    }
  }
}

const mapStateToprops = (state) => {
  return {
    //仓库里的focused 
    //统一成immutable
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list'])
  }
}
//方法写在里面
const mapDispatchToprops = (dispatch) => {
  return {
    hanldeInputFocus(){
      dispatch(actionCreators.searchFocus());
      dispatch(actionCreators.getList())
    },
    hanldeInputBlur(){
      dispatch(actionCreators.searchBlur());
    }    
  }
}
//ui组件 header
//容器组件 connect 处理数据和逻辑
export default connect(mapStateToprops, mapDispatchToprops) (Header);