import { extend } from 'umi-request';


/**
 * 配置request请求时的默认参数
 */
const request = extend({
  requestType: 'json',
  responseType: 'json',
  credentials: 'include', // 默认请求是否带上cookie
});


export default request;
