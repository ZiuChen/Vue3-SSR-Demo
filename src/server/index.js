const express = require('express')
import createApp from './server-entry'
import { renderToString } from '@vue/server-renderer'

import { createMemoryHistory } from 'vue-router'
import createRouter from '../router'

const app = express()

// 将打包后的静态资源文件夹作为 `静态资源目录`
app.use(express.static('build'))

// 客户端访问任何路径都会匹配到这个路由
// 服务端渲染时 会根据请求的url设置路由
app.get('/*', async (req, res) => {
  const app = createApp()

  // 服务端渲染时 创建内存路由
  const router = createRouter(createMemoryHistory())

  // 将路由实例挂载到app实例上
  app.use(router)

  // 服务器渲染时 根据请求的url设置路由
  await router.push(req.url || '/') // 如果请求的url不存在 则默认为'/'

  // 等待路由就绪（异步组件加载） 再进行渲染
  await router.isReady()

  const html = await renderToString(app)

  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vue3 SSR App</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/client/client_bundle.js"></script>
      </body>
    </html>
    `
  )
})

app.listen(3000, () => {
  console.log(`Server listening on port 3000\n http://localhost:3000`)
})
