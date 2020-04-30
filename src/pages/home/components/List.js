import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import{
  ListItem,
  ListInfo,
  LoadMore
} from '../style'
class List extends PureComponent {
  render()
   {
    const {list,getMoreList,page} = this.props;
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
        <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>  
      </div>
    )
  }
}
const mapState = (state)=>({
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page){
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapState,mapDispatch)(List)