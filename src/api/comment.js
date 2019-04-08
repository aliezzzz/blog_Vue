import request from '../utils/request'

export const getCommentList = id =>
        request({
            method: 'get',
            url: '/commentList/?post=' + id
        })

export const nextCommentPage = page =>
        request({
            method: 'get',
            url: page
        })

export const comment = data =>
        request({
            headers:{
                Authorization: `JWT ${sessionStorage.getItem('token')}`
            },
            method: 'post',
            url: '/comment/',
            data
        })