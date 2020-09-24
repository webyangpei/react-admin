import request from "../utils/request";
import User from "../types/user";

// /**
//  * 执行登录
//  * @param params
//  */
export function goLogin(params:User) {
  return request({
      url: 'http://localhost:9000/api/user/login',
      method: 'get',
      params
  })
}

