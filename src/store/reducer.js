import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store';
//自动生成了immutable

const reducer =  combineReducers({
  header: headerReducer
})
export default reducer;
