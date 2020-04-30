import * as constants from './constants'
import { fromJS} from 'immutable'

//数据都存在reducer里
const defaultState = fromJS({
  title:''
});

export default (state = defaultState,action) => {
  switch(action.type){
    case constants.ADD_ARTICLE_LIST:
      return state.set('title',action.title)
    default: return state
  }
}
