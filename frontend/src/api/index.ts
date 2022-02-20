import request from '../utils/request';

const fetchData = (query: any) => {
    return request({
        url: './table.json',
        method: 'get',
        params: query,
    });
};

const checkHealth = () => {
    return request({
        url: './api/health',
        method: 'get',
    });
};

export { fetchData, checkHealth };
