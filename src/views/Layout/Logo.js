import React from 'react';

const Logo = () => {
  let imgStyle = {
    height: '64px',
    width: '100%',
    backgroundColor: '#fff'
  }
  return (
    <img alt="" style={imgStyle} src={require('../../assets/img/icon-no-shop-logo.png')}/>
  )
};

export default Logo