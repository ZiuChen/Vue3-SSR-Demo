import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import createRouter from '../router'
import App from '../App.vue'

// 这部分的代码是在浏览器中运行的 所以可以直接使用createApp
// 这一点和传统SPA应用的入口文件是一样的

const app = createApp(App)

const router = createRouter(createWebHistory())

app.use(router)

// 这里的挂载操作是在浏览器中进行的
// 必须要等到服务端渲染完成之后才能进行挂载操作
// 否则会导致服务端渲染的内容被浏览器端渲染的内容覆盖
router.isReady().then(() => {
  app.mount('#app')
})
