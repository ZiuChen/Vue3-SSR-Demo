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
    },
    // 为页面添加路由切换动画
    pageTransition: {
      name: 'page',
      mode: 'out-in'
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
  // 全局样式
  css: ['@/assets/style/common.scss', '@/assets/style/transition.scss'],
  // 配置vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 自动给scss模块中的变量添加额外的数据
          additionalData: '@use "@/assets/style/variables.scss" as *;'
        }
      }
    }
  },
  // 为不同路由配置不同的渲染模式
  routeRules: {
    // 为所有路由配置渲染模式
    '*': {
      ssr: true
    },
    // 为某个路由配置渲染模式
    '/posts/**': {
      ssr: false // SPA
    },
    'parent/child': {
      swr: true // 静态生成 会生成多次静态页面 （自动重新验证时需要重新生成）
    },
    '/about': {
      static: true // SSG 只会在构建时生成一次静态页面
    }
  },
  // 忽略对shim.d.ts的生成
  typescript: {
    shim: false
  }
})
