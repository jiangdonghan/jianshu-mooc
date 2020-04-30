import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {
  WriteWrapper,
  WriterItem,
  WriterTitleWrapper
} from '../style'
class Writer extends PureComponent {
  render() {
    const {writerList} = this.props
    return (
      <WriteWrapper>
        <WriterTitleWrapper>
        <span className="title-left">
          推荐作者
        </span>
        <span className="title-right"><i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批</span>
        </WriterTitleWrapper>
        {
          writerList.map(item => {
            return(
              <WriterItem key = {item.get('id')}>
              <img className = 'avatar' alt =''
              src={item.get('url')}/>
              <div className="nameWrapper">
              <span className='name'>{item.get('name')}</span>
              <span className="follow">+关注</span>
              </div>
              <p>写了{item.get('count')}字 · {item.get('like')}喜欢</p>
            </WriterItem>
            )
          })
        }
        
      </WriteWrapper>
    )
  }
}
const mapState = (state) => ({
  writerList: state.getIn(['home','writerList'])
})
export default connect(mapState,null)(Writer)