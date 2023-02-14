<template>
  <div class="about">
    <h1>About</h1>
    <div>{{ count }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script setup>
import useCount from '../hooks/useCount'

const { count, increment, decrement } = useCount()
</script>
