const express = require('express')
import createApp from './server-entry'
import { renderToString } from '@vue/server-renderer'

const app = express()

// 将打包后的静态资源文件夹作为 `静态资源目录`
app.use(express.static('build'))

app.get('/', async (req, res) => {
  const app = createApp()
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
