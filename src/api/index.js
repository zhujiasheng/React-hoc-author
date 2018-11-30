/**
 * Created by Thomas on 2018/10/23.
 */

import {
  fetchTestImgResource,
  fetchPurchaseListResource
} from "./resources"


export default {

  //测试接口请求
  fetchTestImg: function () {
    return fetchTestImgResource()
  },
  getPurchaseData: function () {
    return fetchPurchaseListResource()
  }
}
