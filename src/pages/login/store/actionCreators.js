import axios from 'axios'
import * as constants from './constants'
const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true 
})
//异步
export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res)=>{
      const result = res.data.data
      console.log(result)
      if(result){
        dispatch(changeLogin())
      }else{
        alert('登陆失败')
      }
    })

  }
}
export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})