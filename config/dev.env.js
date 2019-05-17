'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NEW_API_ROOT:'"https://biz.qkzhi.com/td-api/"'
})
