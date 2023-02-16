import { lazy, ReactNode, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Route, redirect, Navigate } from 'react-router-dom'
import { Spin } from 'antd'
import { getToken } from '../utils/auth'
import { DOC_TITLE } from '../utils/constant'
import { setLocation, setUserLocation } from '../utils/location'
import ProgressComponent from '../hooks/progress'

// const BlogLayout = lazy(() => import('../layout/blogLayout'))
import BlogLayout from '../layout/blogLayout'
const NotFound = lazy(() => import('../page/exception/404'))
const Login = lazy(() => import('../page/Login'))
const Main = lazy(() => import('../page/Main'))
const User = lazy(() => import('../page/User'))
const ArticleClassify = lazy(() => import('../page/article/classify'))
// import UserInfo from '../page/User/userInfo'
const UserInfo = lazy(() => import('../page/User/userInfo'))
const UserFavour = lazy(() => import('../page/User/userFavour'))
const UserArticle = lazy(() => import('../page/User/userArticle'))
const DetailArticle = lazy(() => import('../page/article/detailArticle'))

// 防止路由切换的时候页面白屏
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<>loading...</>}>{children}</Suspense>
}

const promission = () => {
  const istoken = getToken()
  if (istoken) {
    return
  } else {
    return redirect('/login')
  }
}
// const istoken = getToken()
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProgressComponent>
        <BlogLayout />
      </ProgressComponent>
    ),
    // errorElement: <div>404</div>,

    children: [
      {
        path: '',
        element: lazyLoad(<Main />),
        loader: (value) => {
          // console.log(value)
          document.title = `${DOC_TITLE} | 主页`
          setLocation('main')
        },
      },
      {
        path: 'user',
        element: lazyLoad(<User />),
        loader: () => {
          document.title = `${DOC_TITLE} | 个人中心`
          setLocation('user')
          // return redirect('info')
          // return promission()
        },
        errorElement: <NotFound />,
        children: [
          {
            path: 'info',
            element: lazyLoad(<UserInfo />),
            loader: () => {
              setUserLocation('/user/info')
            },
          },
          {
            path: 'favour',
            element: lazyLoad(<UserFavour />),
            loader: () => {
              setUserLocation('/user/favour')
            },
          },
          {
            path: 'article',
            element: lazyLoad(<UserArticle />),
            loader: () => {
              setUserLocation('/user/article')
            },
          },
        ],
      },
      {
        path: 'classify',
        element: lazyLoad(<ArticleClassify />),
        loader: () => {
          document.title = `${DOC_TITLE} | 文章分类`
          setLocation('classify')
        },
      },
      {
        path: 'detailArticle/:id',
        element: lazyLoad(<DetailArticle />),
        loader: () => {
          document.title = `${DOC_TITLE}`
          setLocation('')
        },
      },
    ],
  },
  {
    path: '/login',
    element: (
      <ProgressComponent>
        <Login />
      </ProgressComponent>
    ),
    loader: () => {
      document.title = `${DOC_TITLE} | 登录`
    },
  },
  {
    path: '*',
    element: (
      <ProgressComponent>
        <NotFound />
      </ProgressComponent>
    ),
    loader: () => {
      document.title = `${DOC_TITLE} | 404`
    },
  },
])

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
