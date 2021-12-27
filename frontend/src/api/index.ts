import axios, { AxiosRequestConfig } from 'axios'

const health = async () => {
    const config: AxiosRequestConfig = {
        method: 'get',
        url: 'http://localhost:3000/health',
    };
    const response = await axios(config);
    return response.data.health;
}

export { health };
