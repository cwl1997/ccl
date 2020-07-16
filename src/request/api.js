import service from './http.js'

export const getPersonInfo = data => {
    return service({
        url: '/341-2',
        method: 'post',
        data
    })
};

export const getPersondata = params => {
    return service({
        url: '/shouji/query',
        method: 'get',
        params
    })
};
