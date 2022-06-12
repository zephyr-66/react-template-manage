import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { RequestInterceptors } from "./type";

export default class Request {
  /**
   * @description axios实例
   */
  private instance: AxiosInstance;
  /**
   * @description 拦截器对象
   */
  private interceptorsObj?: RequestInterceptors;

  constructor(config: AxiosRequestConfig, interceptors: RequestInterceptors) {
    this.instance = axios.create(config);
    this.interceptorsObj = interceptors;
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsErr
    );
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsErr
    );
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
}
