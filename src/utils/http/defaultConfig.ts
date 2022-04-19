export const defaultConfig = {
  method: 'get',
  baseURL: '/',
  withCredentials: true,
  timeout: 30 * 1000,
  responseType: 'json',
  maxContentLength: 1024 * 1024 * 1024,
  filter: false,
  cache: false,
  //   overrideDefaultRequestInterceptor: false,
  //   overrideDefaultResponseInterceptor: false,
};

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json;charset=utf-8',
  Accept: 'application/json;version=3.0;compress=false;',
};
exports.headers = headers;
