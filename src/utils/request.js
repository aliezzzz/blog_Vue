import axios from 'axios'
// import store from '@/store'
import { Message } from 'element-ui'  // 消息提示
import router from '../router/index.js' // 跳转登录
import store from '../store'

//utils
const sessionGet = key => localStorage.getItem(key)
const sessionSet = (key, value) => {
	localStorage.setItem(key, value)
}

//service
const service = axios.create({
	// baseURL: 'process.env.VUE_APP_BASE_API', // api 的 base_url
	baseURL: 'http://127.0.0.1:8000/',
	timeout: 10000,
})

// http request 拦截器
service.interceptors.request.use(
		config => {
			if (store.state.userInfo.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
				config.headers.Authorization = `JWT ${store.state.userInfo.token}`;
			}
			return config;
		},
		err => {
			return Promise.reject(err);
		});


// http response 拦截器
service.interceptors.response.use(
		res=>{
			return res.data
		},
		error => {
			console.log(error);
			let res = error.response;
			switch (res.status) {
				case 401:
					// 返回 401 清除token信息并跳转到登录页面
					// store.commit(types.LOGOUT);
					//router.replace({
					//  path: '/app/login',
					//  query: {redirect: router.currentRoute.fullPath}
					//})
					console.log('未登录 或者token过期');
				case 403:
					console.log('您没有该操作权限');
					// alert('您没有该操作权限');
				case 500:
					console.log('服务器错误');
					// alert('服务器错误');
			}
			return Promise.reject(error.response.data)   // 返回接口返回的错误信息
		});

export default service
