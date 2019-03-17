import request from '../utils/request'

export const getArticlesList = filter =>
		request({
			method: 'get',
			url: '/articles/' + '?time=' + filter,
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
