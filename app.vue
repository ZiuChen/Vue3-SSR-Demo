<template>
  <div class="app"></div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

console.log(runtimeConfig.appKey) // 服务器能读取，但浏览器读取到的是 undefined
console.log(runtimeConfig.public.baseURL) // 浏览器/服务器都能读取

console.log(process.dev) // 开发环境下为 true
console.log(process.client) // 浏览器环境下为 true
console.log(process.server) // 服务器环境下为 true
console.log(typeof window === 'object') // 浏览器环境下为 true

const appConfig = useAppConfig()
console.log(appConfig.title)
console.log(appConfig.description)
console.log(appConfig.theme.primary)

// onMounted 生命周期 只会在浏览器环境下执行
onMounted(() => {
  document.title = appConfig.title
})

// 在某些页面动态向 head 中添加 meta 标签
// 调整head标签中的内容 以进行SEO优化
useHead({
  title: appConfig.title,
  meta: [
    {
      name: 'description',
      content: appConfig.description
    }
  ]
})
</script>
