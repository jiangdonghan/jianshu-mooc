// import * as constants from './constants'
import { fromJS} from 'immutable'

//数据都存在reducer里
const defaultState = fromJS({
  topicList:[{
    id: 1,
    title: '社会热点',
    src: 'https://via.placeholder.com/32'
  }]
});

export default (state = defaultState,action) => {
  switch(action.type){
    default: return state
  }
}
