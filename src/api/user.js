import * as request from '@/utils/request';

// 登录操作
export function login(params) {
  return request({
    url: 'http://test.com',
    method: 'get',
    params
  })
}