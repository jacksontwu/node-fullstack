import request from '../utils/request';

export const fetchData = (query: any) => {
    return request({
        url: './table.json',
        method: 'get',
        params: query,
    });
};
