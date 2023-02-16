<template>
  <div class="home">
    <h1>Home</h1>
    <ClientOnly>
      <p>Client only content.</p>
      <p>This will render dynamically on the client.</p>
      <template #fallback> Loading ... </template>
    </ClientOnly>

    <AppAlert>
      <p>This is an auto-imported component.</p>
    </AppAlert>
  </div>
</template>

<style lang="scss" scoped>
// 使用 @use 导入 scss 变量和 mixin 文件
// 注意: @import 已经被废弃 且不能与 @use 混用
// @import 会导致同变量名冲突与覆盖 而 @use 在导入的同时提供了命名空间 避免了变量名冲突
// 也可以直接 as * 导入所有变量和 mixin
// @use '@/assets/style/variables.scss' as variables;
@use '@/assets/style/mixins.scss' as mixins;

// 如果配置了nuxt.config.js中的vite.css.preprocessOptions.additionalData
// 则不必在每个文件中都手动引入变量和mixin
// Nuxt 会自动将这些文件注入到每个文件的顶部

.home {
  color: $color-primary; // variables.$color-primary
  @include mixins.border();
}
</style>
