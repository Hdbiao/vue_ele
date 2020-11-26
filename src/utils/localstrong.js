// 设置localStorage
export const setStore = (name, data) => {
  if (!name) return
  if (typeof data !== 'string') {
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(name, data)
}

// 获取localStoragede
export const getStore = (name) => {
  if (!name) return
  return JSON.parse(window.localStorage.getItem(name))
}