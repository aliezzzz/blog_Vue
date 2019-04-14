import Vue from 'vue'
import Vuex from 'vuex'

import * as api from '@/api/articles.js'

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
		},
	},
	actions: {
		nextArticlesPage({commit}, url){
			api.nextPage(url)
				.then( res => {
					commit('setArticle', res)
				})
		},
		searchArticle({state, commit}, cond){
			api.getArticlesList(cond)
				.then( res => {
					commit('setArticle', res)
				})
		},
		getArticleByCate({state, commit}, cate){
			api.getArticlesListByCate(cate)
				.then( res => {
					commit('setArticle', res)
				})
		},
		getArticleByTime({state, commit}, time){
			api.getArticlesListByTime(time)
				.then( res => {
					commit('setArticle', res)
				})
		}
	}
})
