/*
 * @Author: wangtao
 * @Date: 2021-05-25 09:51:40
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-09-17 15:08:13
 * @Description: 为了统一化管理，并且同步api，增强开发体验
 */

import SyncStorage from 'sync-storage';
import msg from './msg';
import cache from './cache';

export default {
  // 存储字符串
  setItem: (key, value) => {
    try {
      console.log('🚀🚀🚀wimi======>>>key, value', key, value);
      SyncStorage.set(key, value);
    } catch (e) {
      msg.emit('app:tip', { text: '保存失败' });
    }
  },
  // 获取字符串
  getItem: (key) => {
    try {
      const value = SyncStorage.get(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      msg.emit('app:tip', { text: '取值失败' });
    }
  },
  // 清除回调
  removeItem: (key) => {
    try {
      SyncStorage.remove(key);
    } catch (e) {
      console.log(e);
    }
  },
  // 用户信息抛异常，清理掉上次用户的信息
  clearUserStorage: () => {
    try {
      SyncStorage.remove(cache.TOKEN_ID);
      SyncStorage.remove(cache.USER_INFO);
      SyncStorage.remove(cache.ROLE);
      SyncStorage.remove(cache.ENTERPRISE_INFO);
    } catch (e) {
      console.log(e);
    }
  },
};
