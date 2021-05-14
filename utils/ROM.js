// 与客户端交互

/**
 * 发送token到客户端
 * @param {*} data 对应后端token
 */
export const sendTokenToClient = (data) => {
  const ROM = window.ROM || {};

  const param = {
    data,
  };
  console.log(`sendTokenToClient: on_get_user_token`, param);
  ROM.on && ROM.on("on_get_user_token", param);
};

/**
 * 发送token到客户端
 * @param {*} data 对应后端token
 */
export const changeTitleBK = (data = "") => {
  const ROM = window.ROM || {};

  const param = {
    data,
  };
  console.log(`sendTokenToClient: change_title_bk`, param);
  ROM.on && ROM.on("change_title_bk", param);
};

/**
 * 获取所有的账号信息
 * @param {*} data
 */
export const httpGetAllAccountInfo = (callback = () => {}) => {
  const ROM = window.ROM || {};

  const param = {};
  console.log(`sendTokenToClient: http_get_all_account_info`, param);
  ROM.on &&
    ROM.on(
      "http_get_all_account_info",
      param,
      (result, accounts = { account: [] }) => {
        console.log("httpGetAllAccountInfo => ", result, accounts.account);
        callback(result, accounts.account);
      }
    );
};

/**
 * 打开精准运营按钮
 * @param {*} data {shop_id}
 */
export const openCustomizationBT = (data) => {
  const ROM = window.ROM || {};

  const param = {
    ...data,
  };
  console.log(`sendTokenToClient: open_customization_bt`, param);
  ROM.on && ROM.on("open_customization_bt", param);
};

/**
 * 设置应答模式按钮
 * @param {*} data {shop_id: 'xxx', "work_mode",1}
 */
export const changeWorkModeBT = (data, callback = () => {}) => {
  const ROM = window.ROM || {};

  const param = {
    ...data,
  };
  console.log(`sendTokenToClient: change_work_mode_bt`, param);
  ROM.on &&
    ROM.on("change_work_mode_bt", param, (result) => {
      console.log("result: ", result);
      callback(result);
    });
};

/**
 * 打开问答管理按钮
 * @param {*} data {shop_id: 'xxx'}
 */
export const openEnterMPBT = (data) => {
  const ROM = window.ROM || {};

  const param = {
    ...data,
  };
  console.log(`sendTokenToClient: open_enter_mp_bt`, param);
  ROM.on && ROM.on("open_enter_mp_bt", param);
};
