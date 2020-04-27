import * as constants from './constants'
import { fromJS} from 'immutable'
//数据都存在reducer里
const defaultState = fromJS({
  focused: false,
  list: []
});
export default (state = defaultState,action) => {
  switch(action.type) {
    //return出去不需要break
    case constants.SEARCH_FOUCS:
      return state.set('focused',true);
    case constants.SEARCH_Blur:
      return state.set('focused',false)
    case constants.CHANGE_LIST:
      return state.set('list',action.data)
    default:
      return state
  }
}