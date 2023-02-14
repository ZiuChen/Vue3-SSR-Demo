<template>
  <div class="home">
    <h1>Home</h1>
    <div>{{ count }}</div>
    <button @click="count++">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
