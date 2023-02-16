import React from 'react'
import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'

const showTotal: PaginationProps['showTotal'] = (total) => `Total ${total} items`
const MyPagination: React.FC = () => (
  <>
    <Pagination size="small" total={50} showTotal={showTotal} showSizeChanger />
  </>
)

export default MyPagination
