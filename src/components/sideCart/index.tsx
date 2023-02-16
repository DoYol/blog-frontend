import React from 'react'
import { Card, Button } from 'antd'
import './index.css'

const SideCart: React.FC = () => {
  const checkedAll = () => {
    console.log('查看全部')
  }

  return (
    <>
      <Card bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card bordered={false} style={{ width: 300, marginTop: 15 }}>
        <div className="title">最新文章</div>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card bordered={false} style={{ width: 300, marginTop: 15 }}>
        <div className="title">热门文章</div>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card bordered={false} style={{ width: 300, marginTop: 15 }}>
        <div className="title flex_between">
          <span>热门标签</span>
          <span className="btn">
            <Button type="link" onClick={checkedAll}>
              查看全部
            </Button>
          </span>
        </div>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  )
}
export default SideCart
