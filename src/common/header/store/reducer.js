import * as constants from './constants'
import { fromJS} from 'immutable'
//数据都存在reducer里
const defaultState = fromJS({
  focused: false,
});
export default (state = defaultState,action) => {
  if(action.type === constants.SEARCH_FOUCS){
    return state.set('focused',true)
  }
  //immutable对象的set方法会结合之前immutable对象的值
  //和设置的值，返回一个全新的对象
  //避免不小心改变掉state的情况
  if(action.type === constants.SEARCH_Blur){
    return state.set('focused',false)
  }
  return state
}