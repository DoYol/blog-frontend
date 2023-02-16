import { StarOutlined, UserOutlined, FileTextOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { getUserLocation } from '../../utils/location'
import './index.css'

const { Header, Content, Footer, Sider } = Layout

// menu菜单数据
const items: MenuProps['items'] = [
  {
    label: '个人资料',
    key: '/user/info',
    icon: <UserOutlined />,
  },
  {
    label: '我的收藏',
    key: '/user/favour',
    icon: <StarOutlined />,
  },
  {
    label: '我的文章',
    key: '/user/article',
    icon: <FileTextOutlined />,
  },
]
const App: React.FC = () => {
  const [local, setLocal] = useState<Array<string>>([])

  const navigate = useNavigate()
  // const location = useLocation()
  useEffect(() => {
    const path = getUserLocation()
    if (path == null) {
      navigate('/user/info')
      setLocal(['/user/info'])
    } else {
      navigate(path)
      setLocal([path])
    }
  }, [])

  const menuClick = (value: any) => {
    console.log(value)
    navigate(value.key)
    setLocal([value.key])
  }
  return (
    <div>
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 64,
            bottom: 0,
            backgroundColor: '#ffffff',
          }}
        >
          <Menu theme="light" mode="inline" selectedKeys={local} items={items} onClick={menuClick} />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
