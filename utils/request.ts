import axios, { AxiosInstance } from 'axios';


// create an axios instance
const service: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API, // api的base_url
  // baseURL: '/api', // api的base_url
  timeout: 50000, // request timeout
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
});

// request interceptor
service.interceptors.request.use((config) => {
  // Do something before request is sent
  if (localStorage.getItem('token')) {
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    config.url = config.url + '?token=' + localStorage.getItem('token');
  }
  return config;
}, (error) => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
});

// respone interceptor
service.interceptors.response.use(
  (response) => {
    // 增加权限拦截
    const res = response.data;
    if (res.code === 403) {
    }
    return response;
  },
  (error) => {

      console.log(error);
    return Promise.reject(error);
  });

export default service;
