const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  resolve: {
    // 用于配置webpack如何寻找模块对应的文件
    extensions: ['.js', '.jsx', '.json', '.vue']
  },
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
        loader: 'vue-loader' // 用于解析.vue文件 将其中的template script style等内容转换为js代码
      }
    ]
  },
  plugins: [
    // 用于将vue文件转换为js文件时 解析.vue文件中的内容
    // 该插件是vue-loader的依赖 它的作用是将你定义的其他规则复制并应用到 .vue 文件里相应语言的块
    new VueLoaderPlugin()
  ]
}
