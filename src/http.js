import axios from 'axios'
import router from './router'

//请求拦截
axios.interceptors.request.use(
    config => {
        if (localStorage.wxpyToken) {
            config.headers.Authorization = localStorag.wexpyToken
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)


// 响应拦截
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        // 错误提醒
        const {
            status
        } = error.response;
        console.log(status);
        if (status == 401) { //如果token 过期
            alert('Token过期，请重新登录');
            localStorage.removeItem('wexpyToken');
            router.push('/login');
        } else {
            alert(error.response.data);
        }
        return Promise.reject(error);
    }
)

export default axios;