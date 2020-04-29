import React, {Component} from 'react'
import {connect} from 'react-redux'
import{
  ListItem,
  ListInfo
} from '../style'
class List extends Component {
  render()
   {
    const {list} = this.props;
    return (
      <div>
        {
          list.map((item)=>{
            return(
              <ListItem key={item.get('id')}>
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
      </div>
    )
  }
}
const mapState = (state)=>({
  list: state.getIn(['home','articleList'])
})
export default connect(mapState,null)(List)