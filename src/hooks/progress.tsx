import React, { ReactElement } from 'react'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
// import { Navigate } from "react-router-dom";
function ProgressComponent({ children }: any): ReactElement {
  try {
    NProgress.start()
    return <>{children}</>
  } catch (error) {
    return <>{children}</>
  } finally {
    NProgress.done()
  }
}

export default ProgressComponent

// // 鉴权
// import { getToken } from '../utils/token.js'
// import { Navigate } from 'react-router-dom'
// function AuthComponent({ children }) {
//   const isToken = getToken()
//   if (isToken) {
//     return <>{children}</>
//   } else {
//     return <Navigate to="/login" replace />
//   }
// }

// export default AuthComponent
