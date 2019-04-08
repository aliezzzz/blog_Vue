import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index/Index'
import Date from '../views/date/Date'
import Category from  '../views/category/Category'

import articleIndex from '../views/article/index'

import register from '../views/login/Register'
import login from '../views/login/Login'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/',
			name: 'home',
			component: Home,
			children: [
				{
					path: 'register',
					name: 'register',
					component: register
				},
				{
					path: 'login',
					name: 'login',
					component: login
				},
				{
					path: 'index',
					name: 'index',
					component: Index
				},
				{
					path: 'date',
					name: 'date',
					component: Date
				},
				{
					path: 'category',
					name: 'category',
					component: Category
				},
				{
					path: 'index/article-page/:id',
					name: 'artilce-page',
					component: articleIndex,
					props: true
				}
			]
		}
	]
})
