import request from '../utils/request'

export const getArticlesList = filter =>
		request({
			method: 'get',
			// url: '/articles/?ordering=-add_time',
			url: '/articles/?ordering=-add_time&search=' + filter,
		})

export const getArticlesItem = id =>
		request({
			method: 'get',
			url: '/articles/' + id
		})

export const getCategory = data =>
		request({
			method: 'get',
			url: '/category/',
			data
		})


export const archiveDate = data =>
		request({
			method: 'get',
			url: '/archive/',
			data
		})
