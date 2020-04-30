import React, {PureComponent} from 'react'

import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
//pureComponent内置了一个shouldcomponentupdate 必须用immutablejs
class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号'></Input>
          <Input placeholder='密码'></Input>
          <Button>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }

  
}

export default Login