import * as constants from './constants'
import { fromJS} from 'immutable'
//数据都存在reducer里
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage:1
});
export default (state = defaultState,action) => {
  switch(action.type) {
    //return出去不需要break
    case constants.SEARCH_FOUCS:
      return state.set('focused',true);
    case constants.SEARCH_Blur:
      return state.set('focused',false)
    case constants.CHANGE_LIST:
      return state.set('list',action.data).set('totalPage',action.totalPage)
    case constants.MOUSE_ENTER:
      return state.set('mouseIn',true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn',false)
    case constants.CHANGE_PAGE:
      return state.set('page',action.page)
    default:
      return state
  }
}