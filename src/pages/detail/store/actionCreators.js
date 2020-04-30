import axios from 'axios'
import * as constants from './constants'
const addTitle = (title) => ({
  type : constants.ADD_ARTICLE_LIST,
  title
})
export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then((res) => {
      const result = res.data.data
      dispatch(addTitle(result.title));
    })
  }
}