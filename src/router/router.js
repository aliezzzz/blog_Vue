import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index/Index'
import Date from '../views/date/Date'
import Category from  '../views/category/Category'

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
				}
			]
		}
	]
})
