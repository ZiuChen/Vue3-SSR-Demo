// 全局中间件 会被应用到每个页面
// 你可以在这里做一些全局的事情，比如登录验证
export default defineNuxtRouteMiddleware((context) => {
  console.log('Middleware: auth.global.ts')

  const hasLogin = true

  if (!hasLogin) {
    return navigateTo('/home')
  }
})
