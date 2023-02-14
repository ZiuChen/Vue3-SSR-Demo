import { createSSRApp } from 'vue'
import App from '../App.vue'

// 为什么使用函数而不是直接导出一个app实例: 避免跨请求状态污染问题
// 因为每次请求都需要创建一个新的app实例 避免多个请求之间的数据污染
// 这里的createApp函数会在每次请求时被调用 从而创建一个新的app实例
export default function createApp() {
  return createSSRApp(App)
}
