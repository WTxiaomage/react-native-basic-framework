/*
 * @Author: wangtao
 * @Date: 2020-06-28 15:43:56
 * @LastEditors: 汪滔
 * @LastEditTime: 2020-10-12 18:02:43
 * @Description: 公共模块管理   兼容1.0版本的组件 colors, dashLine, navigationBar, svgs, theme
 */

import * as Button from './button'; // 自定义Button
import msg from './msg'; // 全局通信
import BackImage from './back-image'; // 返回按钮
import * as _ from './util'; // 工具函数
import cache from './cache'; // 常量模块
import Tip from './modal/tip';// tips弹框
import ValidConst from './validate'; // 常用校验正则
import XMImage from './image'; // 图片组件
import XMListView from './list-view'; // 列表组件
import XMEmpty from './empty'; // 缺省图
import XMHeader from './header'; // 内嵌头部
import FormInput from './form/form-input'; // 表单输入
import FormSelect from './form/form-select'; // 表单选择
import FormItem from './form/form-item'; // 表单普通展示项目

export {
  Button,
  msg,
  BackImage,
  _,
  cache,
  Tip,
  ValidConst,
  XMImage,
  XMListView,
  XMEmpty,
  XMHeader,
  FormInput,
  FormSelect,
  FormItem,
};
