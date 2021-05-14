// import { message } from 'antd'

// // import state from './state'
// import { search_goods_clicked } from './ROM'

const ROM = typeof window !== "undefined" && window.ROM ? window.ROM : {};
const ROMDefined =
  ROM.addEventListener && typeof ROM.addEventListener === "function";

const bindEvent = ROMDefined
  ? ROM.addEventListener
  : () => {
      console.error("ROM.addEventListener is undefined");
    };

// 所有账号信息
export const allAccountInfo = (callback = () => {}) =>
  bindEvent("all_account_info", (evt) => {
    console.log("all_account_info =>", evt);
    callback(evt.account);
  });
// 添加账号
export const addOneAccountInfo = (callback = () => {}) =>
  bindEvent("add_one_account_info", (evt) => {
    console.log("add_one_account_info =>", evt);
    callback(evt);
  });
// 删除账号
export const delOneAccountInfo = (callback = () => {}) =>
  bindEvent("del_one_account_info", (evt) => {
    console.log("del_one_account_info =>", evt);
    callback(evt);
  });

// 模式修改
export const onModeChange = (callback = () => {}) =>
  bindEvent("on_mode_change", (evt) => {
    console.log("on_mode_change =>", evt);
    if (evt.isok) {
      callback(evt);
    } else {
      console.error("设置模式失败");
    }
  });

export default bindEvent;
