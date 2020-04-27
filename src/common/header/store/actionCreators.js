import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

export const searchFocus = () => ({
  type: constants.SEARCH_FOUCS
})

export const searchBlur = () => ({
  type: constants.SEARCH_Blur
})

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
})
//必须使用redux thunk才来返回函数
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data
      const action = changeList(data.data)
      dispatch(action)
    }).catch(()=>{
      console.log('error')
    })
  }
}
