import axios from 'axios';

const service = axios.create({
    timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: any) => {
        console.log(error);
        Promise.reject(error);
    });

service.interceptors.response.use(
    async (response: any) => {
        return response.data;
    },
    async (error: any) => {
        Promise.reject(error);
    }
);

export default service;


