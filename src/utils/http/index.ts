import axios from 'axios';
import { defaultConfig } from './defaultConfig';
const http = axios.create(defaultConfig as any);
// 请求拦截
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);
// 响应拦截
http.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    var data = response.data;
    if (data) {
      if (response.headers['content-type'].indexOf('application/json') < 0) {
        return data;
      }
      if (data.success) {
        return data.data;
      }
    }
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export { http };
