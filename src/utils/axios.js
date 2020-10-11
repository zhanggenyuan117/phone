import axios from "axios";
//默认情况下，axios将JavaScript对象序列化为JSON。 要以application / x-www-form-urlencoded格式发送数据，
//可以使用qs库编码数据；使用方法：qs.stringify(obj);
import qs from "qs";
// import { Message as message } from "element-ui";
// import bus from "./bus";

//以下是封装loading
// import { Loading } from "element-ui";
// import Vue from "vue";
// let vue = new Vue();
//最好在编写表格组件的时候加上指令loading
// let loadingInstance;
// let showLoading = (config) => {
//   loadingInstance = Loading.service({
//     target: ".el-table", //默认为表格添加loading
//   });
// };
// let closeLoading = (config) => {
//   vue.$nextTick((_) => {
//     //以服务开启的loading需要异步关闭
//     loadingInstance.close();
//   });
// };

// 默认配置
let instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "x-requested-with": "XMLHttpRequest",
  },
});

// 定义拦截器
instance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers.common.Authorization = token;
    }
    // showLoading(config);

    return config;
  },
  (error) => Promise.reject(error)
);
instance.interceptors.response.use(
  (response) => {
    // setTimeout(() => {
    //   closeLoading();
    // })
    const code = response.data && +response.data.code;
    if (code) {
      if (code === 401) {
        return bus.$emit("goto", "/login");
      }

      if (code === 409) {
        message({
          message: "你的的账号已经在其他地方登陆或退出登录，请重新登录！",
          type: "warning",
        });
        return bus.$emit("goto", "/login");
      }

      if (code === 403) {
        return message({
          message: "你没有权限",
          type: "warning",
        });
      }
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 封装请求对象
let request = (options) =>
  new Promise((resolve, reject) => {
    const method = (options.type || "GET").toLowerCase();
    let config = {
      method: options.type,
      url: options.url,
    };
    if (method === "post" && options.data) {
      config.data = options.data;
    } else {
      if (options.data && !options.params) {
        config.params = options.data;
        delete options.data;
      }
    }
    instance(config)
      .then((data) => {
        const result = data.data;
        if (+result.code === 0) {
          return resolve(result);
        }

        return reject(result);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default request