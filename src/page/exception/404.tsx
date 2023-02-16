import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const App: React.FC = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="不好意思，页面找不到了."
      extra={
        <Button type="primary" onClick={goBack}>
          返回主页
        </Button>
      }
    />
  )
}

export default App
