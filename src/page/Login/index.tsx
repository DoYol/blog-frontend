import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import './style.css'

const Login: React.FC = () => {
  const [signUpFlag, setSignUpFlag] = useState<Boolean>(true)

  const onFinishLogin = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishRegister = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <div className="content">
      <div className={signUpFlag ? 'right-panel-active container' : 'container'}>
        {/* 登录 */}
        <div className="container__form container--signup">
          <Form className="form" name="basic" wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinishLogin} autoComplete="off">
            <h2 className="form__title">登 录</h2>
            <Form.Item name="username" rules={[{ required: true, message: '请输入你的用户名!' }]}>
              <Input style={{ width: 311, height: 47, borderRadius: 30 }} placeholder="用户名" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入你的密码!' }]}>
              <Input.Password style={{ width: 311, height: 47, borderRadius: 30 }} placeholder="密码" />
            </Form.Item>

            {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item> */}
            <a href="****" className="link">
              忘记密码了?
            </a>
            <Form.Item>
              <Button style={{ width: 270, height: 35, borderRadius: 30 }} type="primary" htmlType="submit">
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/* 注册 */}
        <div className="container__form container--signin">
          <Form className="form" name="basic" wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinishRegister} autoComplete="off">
            <h2 className="form__title">注 册</h2>
            <Form.Item name="username" rules={[{ required: true, message: '请输入你的用户名!' }]}>
              <Input style={{ width: 311, height: 47, borderRadius: 30 }} placeholder="用户名" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入你的密码!' }]}>
              <Input.Password style={{ width: 311, height: 47, borderRadius: 30 }} placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Button style={{ width: 270, height: 35, borderRadius: 30 }} type="primary" htmlType="submit">
                注 册
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/* <!-- Overlay --> */}
        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btn" onClick={() => setSignUpFlag(false)}>
                没有账号?注册一个!
              </button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btn" onClick={() => setSignUpFlag(true)}>
                已有账号?点击登录!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
