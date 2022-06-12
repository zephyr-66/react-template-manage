import Request from "./request";
// import { message } from "antd";
const request = new Request(
  {
    baseURL: process.env.BASE_URL,
    timeout: 1000 * 60,
  },
  {
    // 请求拦截器
    requestInterceptors: (config) => {
      return config;
    },
    // 响应拦截器
    responseInterceptors: (response) => {
      const res = response.data;
      return res;
    },
    responseInterceptorsErr: (err) => {
      const status = err?.response?.status;
      switch (status) {
        case 401:
      }
      return Promise.reject({
        success: false,
        message: err.message,
      });
    },
  }
);
export default request;
