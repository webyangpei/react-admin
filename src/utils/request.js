import React from 'react';
import axios from 'axios';

const service = axios.create({
  baseURL: '/',
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(config => {
  return config;
});

service.interceptors.response.use(response =>{
  return response;
}, error => {
  return Promise.reject(error)
})

export default service;