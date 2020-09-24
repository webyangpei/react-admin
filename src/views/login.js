import React, { useState, useEffect } from 'react';
import * as API_User from '@/api/user.js';


const Login = () => {
  const { UserInfo, setUserInfo } = useState([]);

  useEffect(() => {
    API_User.login().then(res => {
      console.log(res, 'test')
      setUserInfo(res || [])
    })
  },[]);

  return (
    <div className="main-content">this is a login page!</div>
  )
}

export default Login;