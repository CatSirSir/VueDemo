/**
 * 接口域名的管理
 * 多域名灵活配置
 */
let baseTemp;
if (process.env.NODE_ENV === "production") {
  baseTemp = {
    backend: "",
    imageUrl: "http://xxxxx22222.com/api"
  };
} else {
  baseTemp = {
    backend: "",
    imageUrl: "http://xxxxx22222.com/api"
  };
}
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV === "production");
const base = baseTemp;
export default base;
