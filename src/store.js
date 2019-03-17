import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 登录状态
		userInfo: {},
		isLogin: false,
		// 文章列表
		articleList: [],
		prev: '',
		next: ''
	},
	getters:{

	},
	mutations: {
		setArticle(state, res){
			state.articleList = res.results;
			state.prev = res.previous;
			state.next = res.next;
		}
	},
	actions: {
	}
})
