import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
  z-index:1;
  position: relative;
  max-width:1440px;
  margin:0 auto;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
  position: absolute;
  display:block;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin:0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  color: #333;
  padding:0 15px;
  font-size:17px;
  &.left{
    float:left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a
  }
`
export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  .zoom{
    position: absolute;
    right: 5px;
    bottom:5px;
    width:30px;
    height:30px;
    border-radius: 15px;
    line-height:30px;
    text-align:center;
    &.focused {
      background:#777;
      color:#fff;
    }
  }
`
export const SearchInfo = styled.div`
  background:white;
  position:absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  .list{
    overflow: hidden;
    .pageList{
    display: block;
    float:left;
    font-size:12px;
    padding:0 5px;
    margin-right:10px;
    margin-bottom:15px;
    line-height:20px;
    border:1px solid #ddd;
    color:#333;
    border-radius:3px;
    }
  }

`
export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  span{
    font-size:13px;
    float:right;
    cursor: pointer;
  }
  .spin{
    display: block;
    float: left;
    font-size:12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height:38px;
  border: none;
  outline: none;
  border-radius:19px;
  margin-top: 9px;
  margin-left:20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  background: #eee;
  color:#666;
  font-size: 14px;
  &::placeholder{
    color: #999;
  }
  &.focused {
    width:240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
`
export const Addition = styled.div`
  position: absolute;
  right:0;
  top:0;
  height:56px;
`

export const Button = styled.div`
  font-size:14px;
  float:right;
  margin-top:9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border:1px solid #ec6149;
  &.reg{
    color:#ec6149;
  }
  &.writing{
    color:#fff;
    background: #ec6149;
  }
`