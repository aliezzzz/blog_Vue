import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 登录状态
		userInfo: {},
		isLogin: undefined,
		// 文章列表
		articleList: [],
		prev: '',
		next: ''
	},
	getters:{
		getIsLogin(state){
			if (state.isLogin != undefined){
				return state.isLogin
			}else{
				if (sessionStorage.getItem('token')){
					return true
				}else{
					return false
				}
			}
		}
	},
	mutations: {
		setArticle(state, res){
			state.articleList = res.results;
			state.prev = res.previous;
			state.next = res.next;
		},
		setLogin(state, type){
			state.isLogin = type;
		}
	},
	actions: {
	}
})
