import axios, { AxiosError } from "axios";

const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = window.sessionStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  let token = response.data.token
  if (token) {
    window.sessionStorage.setItem('token',token)
  }
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // 语法错误非AxiosError 会拿到一个原始的error对象
  if (error instanceof AxiosError) {
    console.log(error, 'xitongyic');
  }
  return Promise.reject(error);
});


export default service
