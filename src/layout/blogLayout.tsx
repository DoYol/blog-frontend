import { Layout, BackTop } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import MHeader from './Header/header'

import './index.css'

const { Content, Footer } = Layout
const style: React.CSSProperties = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
}
const BlogLayout: React.FC = () => (
  <Layout className="layout">
    <MHeader />
    <Content className="site-layout" style={{ padding: '0 30px', marginTop: 64, minHeight: 587 }}>
      {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div> */}
      <Outlet />
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    <BackTop visibilityHeight={100}></BackTop>
  </Layout>
)

export default BlogLayout
