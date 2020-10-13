/*
 * @Author: wangtao
 * @Date: 2020-07-24 20:06:36
 * @LastEditors: 汪滔
 * @LastEditTime: 2020-10-10 11:48:57
 * @Description: file content
 */

import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import { isAndroid } from '../styles';

export default class BackImage extends PureComponent { // 创建一个返回按钮的组件
  render() {
    return (
      <Image
        source={require('./leftBack.png')}
        style={{ width: 18, height: 18, marginLeft: isAndroid ? 0 : 18 }}
      />
    );
  }
}
