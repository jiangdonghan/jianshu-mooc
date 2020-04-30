import React, {Component} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style'
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" 
          src="https://upload.jianshu.io/admin_banners/web_images/4933/4569c554a279c00bee30ee4ed42fc454db7cce1b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt = "banner" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}
export default Home