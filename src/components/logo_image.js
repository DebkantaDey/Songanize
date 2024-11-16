import React, { Component } from 'react'
import { Image } from 'react-native'
import { scale, verticalScale } from '../components/scale';
var imgSrc = require('../images/logo.png')

const LogoImage = () => (
    <Image source = { imgSrc }  
    style={{width:scale(200), height:verticalScale(141), marginTop:20}}  
    resizeMode='contain' />
)
export default LogoImage