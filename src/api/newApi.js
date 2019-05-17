// 配置API接口地址
// 引用utils
import utils from '../utils/index'
// 引用axios
var axios = require('axios')
var root = process.env.NEW_API_ROOT
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
let utoken = utils.getUrlParam('token') // 获取token  存在的话 设置 token
if (utoken) {
  utils.addCookie('utoken', utoken)
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/
// import { Indicator } from 'mint-ui';
// import { Toast } from 'mint-ui';

function apiAxio (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  let token = utils.getCookie('utoken') // 获取是否cookie存在 token
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false,
    headers: {'Content-Type': 'application/json', 'channel': 'qkz', 'Authorization': token, 'appenv': 'h5'}
  })
    .then(function (res) {
      if (res.data.msg === 'SUCCESS') { // 请求成功
        if (success) {
          success(res.data)
        }
      } else if (res.data.code === '999992') { // 尚未登录，请先登录
        utils.appLogin()
      } else {
        if (failure) {
          failure(res.data)
        } else {
          window.alert('error: ' + JSON.stringify(res.data))
        }
      }
    })
    .catch(function (err) {
      let res = err.response
      console.log(res)
      if (err) {
      }
    })
}

export default {
  get: function (url, params, success, failure) {
    return apiAxio('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxio('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxio('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxio('DELETE', url, params, success, failure)
  }
}