import { AxiosResponse, RawAxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

//拦截器接口
export interface InterceptorHooks {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse;
  resonpenseInterceptorCatch?: (error: any) => any;
}

export interface HttpRequestConfig<T> extends RawAxiosRequestConfig<T> {
  interceptorHooks?: InterceptorHooks;
  showLoading?: boolean;
}

export interface HttpData<T> {
  data: T;
  code: number;
  status: number;
}
