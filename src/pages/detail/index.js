import React, {Component} from 'react'
import { connect } from 'react-redux' 
import { actionCreators } from './store'
import {
  DetailWrapper,
  Header,
  Content
} from './style'
class Detail extends Component {
  render() {
    const {title} = this.props
    console.log(title)
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content>
          <img  
          alt =' ' src='http://via.placeholder.com/200/f60/fff?text=疯子!'/>
          <p>
          楼上住了个疯子，每天过了十点就开始闹腾，不是蹦蹦跳跳就是摔摔打打，不然就是跟剁肉一般一刻不停，究竟是怎样阴暗的心理，自己不睡觉，也吵着不让别人睡觉呢？</p>
          <p>难道是在家憋久憋疯了？不对，疫情没开始之前也是这么魔怔，从来没有正常过。</p>
          <p>遇上这样差劲的邻居，要不是家里有老人孩子，我都想买一个震楼器让他也尝尝这种不得安宁的感觉，没有一点公德心，没有素质，逼着人骂街。</p>
          <p>
          楼上楼下住着，最讨厌这种人，可是很多时候却避不开这种人，也是无奈，但是长期这样受干扰只怕自己也会神经衰弱，得想办法了。
          </p>
        </Content>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail()
  }
}
const mapState = (state) => ({
  title: state.getIn(['detail','title'])
})

const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail())
  }
})
export default connect(mapState,mapDispatch)(Detail)