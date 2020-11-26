import axios from 'axios';
import router from '../router/index'

// 设置baseUrl
// axios.defaults.baseURL = URL
axios.defaults.baseURL = URL;  //'https://elm.cangdu.org'
switch (process.env.NODE_ENV) {
  case 'production':
    axios.defaults.baseURL = 'https://elm.cangdu.org';
    break;
  case 'development':
    axios.defaults.baseURL = 'https://elm.cangdu.org';
    break;
}

// 设置超时时间和跨域是否允许携带凭证
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;


// 设置post请求的参数格式
axios.defaults.headers['Content-Type'] = 'application/json'

// 设置请求拦截器
axios.interceptors.request.use(config => {
  let token = localStorage.getItem('token');
  token && (config.headers.Authorization = token);
  return config;
}, error => {
  return Promise.reject(error)
})

// 设置响应拦截器
axios.interceptors.response.use(response => {
  return response.data;
}, error => {
  let { response } = error;
  if (response) {
    // 服务器有返回结果
    switch (response.status) {
      case 401:
        console.log('未登陆');
        router.push('/login')
        break;
      case 403:
        console.log('token过期');
        router.push('/login')
        break;
      case 404:
        break;
    }
  } else {
    // 服务器没有结果返回
    if (!window.navigator.onLine) {
      // 断网处理，跳转到断网页面
      router.push('/netErr')
      router;
    }
    return Promise.reject(error)
  }
})


export default function http(url = '', data = {}, method = "GET") {
  // console.log(process.env.NODE_ENV);
  let promise
  if (method === 'GET' || method === 'get') {
    // 发送get请求
    promise = axios({
      url: url,
      method: method,
      params: data
    })
  } else if (method === 'POST' || method === 'post') {
    // 发送post请求
    promise = axios({
      url: url,
      method: method,
      data: data
    })
  } else if (method === 'PUT' || method === 'put') {
    // 发送put请求
  } else if (method === 'DELETE' || method === 'delete') {
    // 发送delete请求
  }
  return promise
}
