const baseConfig = require('./base.webpack.config')
const { merge } = require('webpack-merge')
const path = require('path')
const { DefinePlugin } = require('webpack')

module.exports = merge(baseConfig, {
  target: 'web', // 打包目标为web环境 这样打包出来的bundle就可以在浏览器中运行
  entry: './src/client/index.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, '../build/client')
  },
  plugins: [
    // 这里的DefinePlugin是webpack内置的插件
    // 透过webpack打包时的DefinePlugin插件 可以在打包时将一些变量注入到代码中
    // 相当于在代码中定义了一些全局变量
    // 除了通过DefinePlugin插件注入全局变量之外 也可以将全局变量定义在window对象上
    new DefinePlugin({
      // 这里我们将__VUE_OPTIONS_API__和__VUE_PROD_DEVTOOLS__设置为全局变量
      // 它们是Vue3中的一些编译选项 用于配置vue3的选项API和生产环境下的devtools是否启用
      // 这里我们都设置为false 有利于通过 tree-shaking 减小bundle的体积
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    })
  ]
})
