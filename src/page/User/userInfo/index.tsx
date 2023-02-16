import React, { useState } from 'react'
import { Card, Descriptions, Avatar, Button } from 'antd'
import { EditOutlined, UserOutlined } from '@ant-design/icons'
import UserInfoModal from '../../../components/userInfoModal'

const UserInfo: React.FC = () => {
  const [open, setOpen] = useState<Boolean>(false)
  const editClick = () => {
    setOpen(true)
  }
  const editClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Card
        title="个人信息"
        extra={
          <Button type="link" onClick={editClick}>
            <EditOutlined />
            编辑
          </Button>
        }
        bordered={false}
        style={{ width: 1200 }}
        headStyle={{ fontWeight: 600 }}
      >
        <Descriptions column={1} labelStyle={{ width: 80, fontSize: 14, top: 0, bottom: 0, left: 0, right: 0, margin: 'auto', marginBottom: 10 }}>
          <Descriptions.Item label="头像">
            <Avatar size={90} icon={<UserOutlined />} style={{ verticalAlign: 'middle' }} />
          </Descriptions.Item>
          <Descriptions.Item label="昵称">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="账号">admin</Descriptions.Item>
          <Descriptions.Item label="性别">男</Descriptions.Item>
          <Descriptions.Item label="电话">1810000000</Descriptions.Item>
          <Descriptions.Item label="邮箱">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="注册时间">2022-09-29 16:20:55</Descriptions.Item>
        </Descriptions>
      </Card>
      <UserInfoModal show={open} close={editClose} />
    </>
  )
}
export default UserInfo
