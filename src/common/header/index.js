import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom'
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
    const {focused,hanldeInputFocus,hanldeInputBlur,list,login,logout} = this.props
    return(
      <HeaderWrapper>
      <Link to='/'>
        <Logo />
      </Link>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        {
          login?<NavItem className='right' onClick = {logout}>退出</NavItem>:
          <Link to="/login"><NavItem className='right'>登录</NavItem></Link>
        }
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
              className = {focused ? 'focused':''}
              onFocus = {()=>hanldeInputFocus(list)}
              onBlur = {hanldeInputBlur}
            ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe622;</i>
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
  getListArea() {
    const {focused, list, page, mouseIn, totalPage, handleMouseEnter,handleMouseLeave,changePageList} = this.props
    const jsList = list.toJS()
    const pageList = [];
    for(let i = (page-1)*10;i<page*10;i++){      
      if(jsList[i] !== undefined ){
        pageList.push(
          <div className="pageList" key={jsList[i]}>{jsList[i]}</div>
        )
      } 
    }
    if(focused || mouseIn){
      return (
        <SearchInfo onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>热门搜索
          <span onClick = {()=>changePageList(page,totalPage,this.spinIcon)}>
            <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一换</span>
        </SearchInfoTitle>
        <div className="list">
          {pageList}
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
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    totalPage: state.getIn(['header','totalPage']),
    login: state.getIn(['login','login'])
  }
}
//方法写在里面
const mapDispatchToprops = (dispatch) => {
  return {
    hanldeInputFocus(list){
      if(list.size === 0) dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus());
    },
    hanldeInputBlur(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    changePageList(page,totalPage,spin){
      let originDegree = spin.style.transform.replace(/[^0-9]/ig, '')
      if(originDegree){
        originDegree = parseInt(originDegree, 10);
      }else{
        originDegree = 0;
      }
      console.log(originDegree)
      spin.style.transform = 'rotate('+(originDegree+360)+'deg)'
      if(page !== totalPage){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }    
  }
}
//ui组件 header
//容器组件 connect 处理数据和逻辑
export default connect(mapStateToprops, mapDispatchToprops) (Header);