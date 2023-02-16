const key = 'activePath'

export const setLocation = (path: string) => {
  window.sessionStorage.setItem(key, path)
}

export const getLcoation = () => {
  return window.sessionStorage.getItem(key)
}

export const removeLocation = () => {
  return window.sessionStorage.removeItem(key)
}

const userKey = 'userPath'
// 保存个人中心里用户选中的menu的状态
export const setUserLocation = (path: string) => {
  window.sessionStorage.setItem(userKey, path)
}

export const getUserLocation = () => {
  return window.sessionStorage.getItem(userKey)
}
