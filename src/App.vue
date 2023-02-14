<template>
  <div class="app">
    <h2>Vue SSR App</h2>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <router-view />
  </div>
</template>
