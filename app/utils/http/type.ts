import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (request: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsErr?: (err: any) => any;
  // 响应拦截
  responseInterceptors?: (response: AxiosResponse) => AxiosResponse;
  responseInterceptorsErr?: (err: any) => any;
}
