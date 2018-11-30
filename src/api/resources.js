/**
 * Created by Thomas on 2018/10/23.
 */

import axios from 'axios';
import Api from '../config';

const instance = axios.create({
  baseURL: Api.baseUrl,
  timeout: 16000
});

instance
  .interceptors
  .request
  .use(config => {
    /* --- 请求拦截处理 --- */
    return config;
  }, err => {
    return Promise.reject(err);
  })

instance
  .interceptors
  .response
  .use(res => {
    /*  if (res.status != 200) {
       return Promise.reject(res);
     } */

    /**
     * --- 响应拦截器处理 ---
     * 1. 判断请求是否成功
     * 2. 判断返回数据是否为空
     * 3. 判断是否有权限调用该接口，无则重定向
     */

    return res;
  }, err => {
    console.warn(err);
    return Promise.reject(err);
  })

const createGetAPI = (url, config) => {
  config = config || {};

  return instance.get(url, {
    params: config
  })
}

const createPostAPI = (url, config) => {
  config = config || {};

  return instance.post(url, config)
}

export const fetchTestImgResource = config => {
  const url = '/AppPurchase/StatisticsFacetBySupplierLoad';
  return createPostAPI(url, config);
}

export const fetchPurchaseListResource = config => {
  const url = 'AppPurchase/StatisticsFacetByBook';
  return createPostAPI(url, config);
}
