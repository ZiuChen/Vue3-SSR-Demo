<template>
  <div class="index">
    <h1>Index</h1>
  </div>
</template>

<script setup>
// 路由中间件 仅在当前页面组件中有效
// definePageMeta 只能在SFC中使用
// definePageMeta() is a compiler-hint helper that is only usable inside the script block of a single file component which is also a page. Its arguments should be compiled away and passing it at runtime has no effect.
definePageMeta({
  // 监听路由跳转
  // 该中间件只会在浏览器环境下执行
  middleware: [
    // 中间件1
    function (to, from) {
      console.log('middleware1', to, from)
    },

    // 中间件2
    function (to, from) {
      console.log('middleware2', to, from)
    }
  ]
})
</script>
