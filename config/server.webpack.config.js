const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  target: 'node', // 指定打包的目标是node环境 这样打包出来的bundle就可以在node环境中运行
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server')
  },
  resolve: {
    // 用于配置webpack如何寻找模块对应的文件
    extensions: ['.js', '.jsx', '.json', '.vue']
  },
  externals: [nodeExternals()], // 排除掉node_modules中的模块 因为此时打包的是运行在服务器的bundle 而node_modules中的模块在node环境中已经存在了
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader', // 用于将es6+的代码转换为es5
        options: {
          // 用于配置 babel-loader 如何转换代码
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin() // 用于将vue文件转换为js文件
  ]
}
