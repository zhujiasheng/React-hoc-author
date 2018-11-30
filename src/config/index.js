/* 开发、线上地址配置 */

let dev = {
  baseUrl: "http://39.105.106.23:7300/mock/5bc9a72bd34cef2e65e637f1/App",
  uploadUrl: "http://200.1.3.190:1554",
  downloadUrl: "http://200.1.3.190:1554"
};

let prod = {
  baseUrl: "",
  uploadUrl: "",
  // 新华正式地址
  downloadUrl: "http://agency.fjxhfx.com"
  // 福建测试地址
  // downloadUrl: "http://agency.cnonixdata.com"
  // 公司测试地址
  // downloadUrl: "http://agencytest.cnonixdata.com"
};

const env = process.env.NODE_ENV;
let Api;

if (env === "development") {
  Api = dev;
} else {
  Api = prod;
}

export default Api;