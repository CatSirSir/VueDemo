/**
 * article模块接口列表
 */
import base from "./base"; // 导入接口域名列表
import axiosIns from "@/request/http"; // 导入http中创建的axios实例

const musicContent = {
  // 新闻列表
  ListContents() {
    return axiosIns.get(`${base.backend}/163.json`);
  }
  // 其他接口…………
};

export default musicContent;
