const baseConfig = require('./base.webpack.config')
const { merge } = require('webpack-merge')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(baseConfig, {
  target: 'node', // 指定打包的目标是node环境 这样打包出来的bundle就可以在node环境中运行
  entry: './src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server')
  },
  externals: [nodeExternals()] // 排除掉node_modules中的模块 因为此时打包的是运行在服务器的bundle 而node_modules中的模块在node环境中已经存在了
})
