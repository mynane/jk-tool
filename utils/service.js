import { get } from "./request";

/**
 * 获取二维码地址
 */
export const fetchJumperUrl = () => {
  return get("/cliaccount/scan_login");
};
