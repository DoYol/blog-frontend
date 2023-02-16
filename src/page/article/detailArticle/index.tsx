import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// 文章详情
const App = () => {
  const { id } = useParams()
  useEffect(() => {
    console.log(id)
  }, [])

  return <div>文章详情</div>
}
export default App
