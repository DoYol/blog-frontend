import React from 'react'
import ArticleShow from '../../components/articleShow'
import SideCart from '../../components/sideCart'
import './index.css'

const Main: React.FC = () => {
  return (
    <div className="content">
      <div className="main">
        <ArticleShow />
      </div>
      <div className="right_content">
        <SideCart />
      </div>
    </div>
  )
}
export default Main
