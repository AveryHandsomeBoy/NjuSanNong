import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// 创建 axios 实例
let service;
if (process.env.NODE_ENV === "development") {
  service = axios.create({
    baseURL: "http://106.15.46.193:8600/", // api 的 base_url
    timeout: 50000 // 请求超时时间
  });
} else {
  // 生产环境下
  service = axios.create({
    baseURL: "https://106.15.46.193:8600",
    timeout: 50000
  });
}

// request 拦截器 axios 的一些配置
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Do something with request error
    console.error("error:", error); // for debug
    Promise.reject(error);
  }
);

// respone 拦截器 axios 的一些配置
service.interceptors.response.use(
  (res) => {
    // Some example codes here:
    // code == 0: success
    if (res.status === 200) {
      const data = res.data
      return data.data;
    } else {
      return Promise.reject(new Error(res.data.message || "Error"));
    }
  },
  (error) => Promise.reject(error)
);

export default service;
