// 文章分类&标签分类
import React, { useState } from 'react'
import { Card } from 'antd'
import GridCard from '../../../components/gridCard'

const tabListNoTitle = [
  {
    key: 'article',
    tab: '文章分类',
  },
  {
    key: 'tag',
    tab: '标签分类',
  },
]

// const contentListNoTitle: Record<string, React.ReactNode> = {
//   article: <GridCard />,
//   tag: <p>标签分类</p>,
// }

const ArticleClassify: React.FC = () => {
  const [activeTabKey2, setActiveTabKey2] = useState<string>('article')
  const [classifyList, setClassifyList] = useState<Array<Object>>([])
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key)
    setClassifyList([{ name: '张三', age: 14 }])
  }
  return (
    <div style={{ paddingTop: 20, paddingLeft: 60, paddingRight: 60 }}>
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        onTabChange={(key) => {
          onTab2Change(key)
        }}
      >
        <GridCard data={classifyList}></GridCard>
      </Card>
    </div>
  )
}

export default ArticleClassify
