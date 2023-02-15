// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 定义环境变量 可以在运行时中获取
  runtimeConfig: {
    appKey: 'aaabbbccc',
    public: {
      baseURL: 'https://example.com'
    }
  },
  // app配置
  app: {
    // 服务端渲染时，将head中的meta标签注入到html中：SEO优化
    // 这些标签会被注入到所有页面的<head>中
    head: {
      title: 'Hello, Nuxt3!',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My brand new Nuxt3 app' },
        { name: 'keywords', content: 'Nuxt3, Vue3, Vite' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [{ src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js' }]
    }
  },
  // 切换渲染模式：SSR | SPA
  ssr: true,
  router: {
    options: {
      // 路由模式：hash | history
      hashMode: false
    }
  },
  // 忽略对shim.d.ts的生成
  typescript: {
    shim: false
  }
})
