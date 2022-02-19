/*
 * @Author: wangtao
 * @Date: 2021-10-27 15:57:31
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-01-25 10:31:38
 * @Description: file content
 */
import React from "react";
import { View } from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";
import LinearGradient from "react-native-linear-gradient";

import { FormInput, FormSelect } from "@/common";
import baseConfig from "@/config/baseConfig";

const { fileUrl } = baseConfig;
const { terminalCode } = baseConfig;

// 调用api
getDayTrajectory = () => {
  api.supply.getDayTrajectory({ carNo: "云 F86002", date: "2021-08-18" }).then(res => {
    if (res.success) {
      console.log("🚀🚀🚀wimi======>>>success", res);
    } else {
      msg.emit("app:tip", { text: res.msg });
    }
  });
};

// 获取当前定位
getCurrentPosition = () => {
  // 当前定位
  NativeModules.MapModule.getCurrentPosition().then(resPosition => {
    console.log("🚀🚀🚀wimi======>>>resPosition", resPosition);
    resPosition.area = resPosition.district;
    if (resPosition.city !== null && resPosition.city !== undefined) {
      this.setState({ currentPosition: resPosition });
    } else {
      msg.emit("app:tip", { text: "获取地理位置信息失败" });
    }
  });
};

_render = () => {
  return (
    <>
      {/* 日期组件 */}
      <DateTimePicker
        isVisible={dateTimePickerIsShow}
        date={dateNow}
        mode="datetime"
        cancelTextIOS="取消"
        confirmTextIOS="确认"
        headerTextIOS="选取日期"
        onConfirm={this.handleConfirmDatePicker}
        onCancel={this.hideDatePicker}
      />
      {/* 渐变 */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#FDCA85", "#EAA448"]}
        style={styles.LabelLine}
      />

      {/* 表单组件 */}

      <View style={styles.wrap}>
        <FormSelect
          label="客户名"
          style={{ paddingRight: px2dp(16) }}
          selected={{ value: "" }}
          onPress={() => {
            console.log("🚀🚀🚀wimi======>>>1111");
          }}
        />
        <FormInput
          label="车主类型"
          style={{ paddingRight: px2dp(16) }}
          onChange={val => {
            console.log("🚀🚀🚀wimi======>>>val", val);
          }}
        />
      </View>
    </>
  );
};
