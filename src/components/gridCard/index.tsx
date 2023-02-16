// 响应式栅格Cart布局
import { Card, List, Button } from 'antd'
import React, { useEffect } from 'react'
import './index.css'

const data = [
  {
    id: '1',
    title: '前 端',
    desc: '测试测试测试',
    logo: 'https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/fd2e9460c58a4af3bbeae5d9ed581688.png',
  },
  {
    id: '2',
    title: '前 端',
    desc: '测试测试测试',
    logo: 'https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/fd2e9460c58a4af3bbeae5d9ed581688.png',
  },
  {
    id: '3',
    title: '前 端',
    desc: '测试测试测试',
    logo: 'https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/fd2e9460c58a4af3bbeae5d9ed581688.png',
  },
  {
    id: '4',
    title: '前 端',
    desc: '测试测试测试',
    logo: 'https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/fd2e9460c58a4af3bbeae5d9ed581688.png',
  },
  {
    id: '5',
    title: '前 端',
    desc: '测试测试测试',
    logo: 'https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/fd2e9460c58a4af3bbeae5d9ed581688.png',
  },
]
interface GridCard {
  data: Array<object>
}
const GridCard: React.FC<GridCard> = (children: GridCard) => {
  const cartClick = (item: any) => {
    console.log(item)
  }
  useEffect(() => {
    console.log(children)
  }, [children])
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 5,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card hoverable style={{ marginTop: 40 }} onClick={() => cartClick(item)}>
            <div className="category_main">
              <div className="category_title">
                <Button
                  type="link"
                  onClick={(e) => {
                    console.log(e, item)
                  }}
                >
                  {item.title}
                </Button>
              </div>
              <div className="category_content">{item.desc}</div>
              <div className="category_logo">
                <img src={item.logo} />
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  )
}

export default GridCard
