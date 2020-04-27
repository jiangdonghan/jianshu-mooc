import * as constants from './constants'
//数据都存在reducer里
const defaultState = {
  focused: false,

};
export default (state = defaultState,action) => {
  if(action.type === constants.SEARCH_FOUCS){
    return{
      focused: true
    }
  }
  if(action.type === constants.SEARCH_Blur){
    return{
      focused: false
    }
  }
  return state
}