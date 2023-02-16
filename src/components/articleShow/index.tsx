import React from 'react'
import { Card, Tag } from 'antd'
import { CommentOutlined, EyeOutlined, HistoryOutlined, EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import MyPagination from '../pagination' //分页组件
import './index.css'
const ArticleShow: React.FC = () => {
  const navigate = useNavigate()

  const articleClick = (v: any) => {
    console.log(v)
    navigate(`detailArticle/123456`)
  }
  return (
    <>
      <Card style={{ width: 750, height: 200, marginBottom: 15 }} hoverable onClick={articleClick}>
        <div className="article_header flex_between">
          <div className="article_header_title">title</div>
          <div className="article_header_data">
            <span className="article_header_viewCount commonText">
              <EyeOutlined /> 1399
            </span>
            <span className="article_header_comment commonText">
              <CommentOutlined />
              330
            </span>
          </div>
        </div>
        <div className="article_content flex_between">
          <div className="article_content_abstrict">Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼v</div>
          <div className="article_content_img">
            <img src="https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/fd2e9460c58a4af3bbeae5d9ed581688.png" />
          </div>
        </div>
        <div className="article_footer flex_between">
          <div>
            <span className="article_footer_author commonText">
              <EditOutlined />
              作者
            </span>
            <span className="article_footer_tag">
              <Tag color="success">success</Tag>
            </span>
          </div>
          <div className="article_footer_time commonText">
            <HistoryOutlined />
            2022-08-24 18:00
          </div>
        </div>
      </Card>
      <Card style={{ width: 750, height: 200, marginBottom: 15 }} hoverable onClick={articleClick}>
        <div className="article_header flex_between">
          <div className="article_header_title">title</div>
          <div className="article_header_data">
            <span className="article_header_viewCount commonText">
              <EyeOutlined /> 1399
            </span>
            <span className="article_header_comment commonText">
              <CommentOutlined />
              330
            </span>
          </div>
        </div>
        <div className="article_content flex_between">
          <div className="article_content_abstrict">Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼v</div>
          <div className="article_content_img">
            <img src="https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/fd2e9460c58a4af3bbeae5d9ed581688.png" />
          </div>
        </div>
        <div className="article_footer flex_between">
          <div>
            <span className="article_footer_author commonText">作者</span>
            <span className="article_footer_tag">
              <Tag color="success">success</Tag>
            </span>
          </div>
          <div className="article_footer_time commonText">
            <HistoryOutlined />
            2022-08-24 18:00
          </div>
        </div>
      </Card>
      <Card style={{ width: 750, height: 200, marginBottom: 15 }} hoverable onClick={articleClick}>
        <div className="article_header flex_between">
          <div className="article_header_title">title</div>
          <div className="article_header_data">
            <span className="article_header_viewCount commonText">
              <EyeOutlined /> 1399
            </span>
            <span className="article_header_comment commonText">
              <CommentOutlined />
              330
            </span>
          </div>
        </div>
        <div className="article_content flex_between">
          <div className="article_content_abstrict">Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼v</div>
          <div className="article_content_img">
            <img src="https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/fd2e9460c58a4af3bbeae5d9ed581688.png" />
          </div>
        </div>
        <div className="article_footer flex_between">
          <div>
            <span className="article_footer_author commonText">作者</span>
            <span className="article_footer_tag">
              <Tag color="success">success</Tag>
            </span>
          </div>
          <div className="article_footer_time commonText">
            <HistoryOutlined />
            2022-08-24 18:00
          </div>
        </div>
      </Card>
      <Card style={{ width: 750, height: 200, marginBottom: 15 }} hoverable onClick={articleClick}>
        <div className="article_header flex_between">
          <div className="article_header_title">title</div>
          <div className="article_header_data">
            <span className="article_header_viewCount commonText">
              <EyeOutlined /> 1399
            </span>
            <span className="article_header_comment commonText">
              <CommentOutlined />
              330
            </span>
          </div>
        </div>
        <div className="article_content flex_between">
          <div className="article_content_abstrict">Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼v</div>
          <div className="article_content_img">
            <img src="https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/fd2e9460c58a4af3bbeae5d9ed581688.png" />
          </div>
        </div>
        <div className="article_footer flex_between">
          <div>
            <span className="article_footer_author commonText">作者</span>
            <span className="article_footer_tag">
              <Tag color="success">success</Tag>
            </span>
          </div>
          <div className="article_footer_time commonText">
            <HistoryOutlined />
            2022-08-24 18:00
          </div>
        </div>
      </Card>
      <Card style={{ width: 750, height: 200, marginBottom: 15 }} hoverable onClick={articleClick}>
        <div className="article_header flex_between">
          <div className="article_header_title">title</div>
          <div className="article_header_data">
            <span className="article_header_viewCount commonText">
              <EyeOutlined /> 1399
            </span>
            <span className="article_header_comment commonText">
              <CommentOutlined />
              330
            </span>
          </div>
        </div>
        <div className="article_content flex_between">
          <div className="article_content_abstrict">Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼v</div>
          <div className="article_content_img">
            <img src="https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/fd2e9460c58a4af3bbeae5d9ed581688.png" />
          </div>
        </div>
        <div className="article_footer flex_between">
          <div>
            <span className="article_footer_author commonText">作者</span>
            <span className="article_footer_tag">
              <Tag color="success">success</Tag>
            </span>
          </div>
          <div className="article_footer_time commonText">
            <HistoryOutlined />
            2022-08-24 18:00
          </div>
        </div>
      </Card>
      <Card style={{ width: 750, height: 200, marginBottom: 15 }} hoverable onClick={articleClick}>
        <div className="article_header flex_between">
          <div className="article_header_title">title</div>
          <div className="article_header_data">
            <span className="article_header_viewCount commonText">
              <EyeOutlined /> 1399
            </span>
            <span className="article_header_comment commonText">
              <CommentOutlined />
              330
            </span>
          </div>
        </div>
        <div className="article_content flex_between">
          <div className="article_content_abstrict">Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼vMysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼Mysql最牛逼v</div>
          <div className="article_content_img">
            <img src="https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/fd2e9460c58a4af3bbeae5d9ed581688.png" />
          </div>
        </div>
        <div className="article_footer flex_between">
          <div>
            <span className="article_footer_author commonText">作者</span>
            <span className="article_footer_tag">
              <Tag color="success">success</Tag>
            </span>
          </div>
          <div className="article_footer_time commonText">
            <HistoryOutlined />
            2022-08-24 18:00
          </div>
        </div>
      </Card>
      <MyPagination />
    </>
  )
}

export default ArticleShow
