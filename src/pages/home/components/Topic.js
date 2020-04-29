import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  TopicWrapper,
  TopicItem
} from '../style'
class Topic extends Component {
  render() {
    const {list} = this.props
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return(
              <TopicItem key={item.get('id')}>
                <img className ='topic-pic'
                //不是普通的item是immutable
                src={item.get('src')} alt = "topic"/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}
//要存在store里，reducer拆成几个部分
const mapState = (state) => ({
  list: state.getIn(['home','topicList'])
})
export default connect(mapState,null)(Topic)