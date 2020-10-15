import axios from 'axios'
import qs from 'qs'
let baseUrl = '/api';

axios.interceptors.response.use(res => {
  console.log('============本次请求路径是:' + res.config.url);
  console.log(res);
  return res;
})


