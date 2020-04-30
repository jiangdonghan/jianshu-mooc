import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import{
  ListItem,
  ListInfo,
  LoadMore
} from '../style'
class List extends Component {
  render()
   {
    const {list,getMoreList} = this.props;
    return (
      <div>
        {
          list.map((item,index)=>{
            return(
              <ListItem key={index}>
              <img className = 'pic'
              src={item.get('url')}
              alt = "pic"/>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="detail">{item.get('detail')}</p>
              </ListInfo>
            </ListItem>  
            )
          })
        }
        <LoadMore onClick={getMoreList}>更多文字</LoadMore>  
      </div>
    )
  }
}
const mapState = (state)=>({
  list: state.getIn(['home','articleList'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(){
    dispatch(actionCreators.getMoreList())
  }
})
export default connect(mapState,mapDispatch)(List)