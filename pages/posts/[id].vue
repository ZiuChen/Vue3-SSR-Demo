<template>
  <div class="posts">
    <h1>Posts</h1>
    <p>Post ID: {{ id }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
</script>
