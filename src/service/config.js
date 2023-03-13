import axios from 'axios';

// 设置基本地址
axios.defaults.baseURL = 'https://www.fastmock.site/mock/434b824c66dc76edf1c6be589d9a62e1/vue-niuke';
// 设置响应拦截器，脱落外层包装
axios.interceptors.response.use(res => res.data);

export default axios;