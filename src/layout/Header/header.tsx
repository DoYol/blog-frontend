import React, { useState, useEffect } from 'react'
import { Layout, Menu, Input, Space, Avatar, Dropdown, Button } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { getToken } from '../../utils/auth'
import { getLcoation, setLocation } from '../../utils/location'
import './header.css'

const { Header } = Layout
const { Search } = Input

// menu菜单数据
const items: MenuProps['items'] = [
  {
    label: '首页',
    key: 'main',
    icon: <HomeOutlined />,
  },
  {
    label: '文章分类',
    key: 'classify',
    icon: <AppstoreOutlined />,
  },
  {
    label: '个人中心',
    key: 'user',
    icon: <UserOutlined />,
  },
]

// 用户头像下拉框数据
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer">
            个人中心
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer">
            设置
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer">
            退出登录
          </a>
        ),
        danger: true,
      },
    ]}
  />
)
// 点击搜索
const onSearch = (v: String) => {
  console.log(v)
}

const MHeader = () => {
  const [local, setLocal] = useState<Array<string>>([])
  // let path= getLcoation()
  const navigate = useNavigate()
  let location = useLocation()
  // 点击menu
  const menuClick: MenuProps['onClick'] = (value) => {
    if (value.key == 'main') {
      navigate('/')
    } else {
      navigate(`/${value.key}`)
    }
  }

  useEffect(() => {
    let path = getLcoation()
    if (path == null) {
      setLocal(['main'])
    } else {
      setLocal([path])
    }
  }, [location])
  return (
    <Header className="header">
      <div className="logo"></div>
      <Menu className="menu" theme="light" mode="horizontal" selectedKeys={local} items={items} onClick={menuClick} />
      <div className="search">
        <Search size="large" placeholder="input search text" onSearch={onSearch} enterButton />
      </div>

      <div className="userInfo">
        {/* 判断用户是否登录，如果未登录显示登录按钮 */}
        {getToken() != null ? (
          <Dropdown overlay={menu} placement="bottom">
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </Dropdown>
        ) : (
          <Space size="small">
            <Button type="link" size="small">
              登 录
            </Button>
            <Button type="link" size="small">
              注 册
            </Button>
          </Space>
        )}
      </div>
    </Header>
  )
}
export default MHeader
