const KEY = 'token_key'

export const getToken = () => {
  return window.localStorage.getItem(KEY)
}

export const setToken = (value: any) => {
  window.localStorage.setItem(KEY, value)
}

export const delToken = () => {
  window.localStorage.removeItem(KEY)
}
