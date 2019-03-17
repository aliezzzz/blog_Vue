import request from "../utils/request";

export const getCode = data =>
		request({
			method: 'post',
			url: '/code/',
			data
		})

export const register = data =>
		request({
			method: 'post',
			url: '/register/',
			data
		})

export const login = data =>
		request({
			method: 'post',
			url: '/login/',
			data
		})
