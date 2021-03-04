import React, { useState, useEffect } from 'react';
import { Button } from "antd";

const Entool = (props: any) => {
    const { authorization } = props;
    console.log(authorization, 2323)
    // 退出登录
    const handleLogout = () => {

    }
    return (
        <div>
            <span>authorization ? '是' ： 否</span>
            <Button type="primary" onClick={handleLogout}>退出登录</Button>
        </div>
    )
};

export default Entool;
