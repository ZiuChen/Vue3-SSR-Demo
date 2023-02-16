<template>
  <div class="about">
    <h1>About</h1>
    <p>
      query.name:
      {{ query.name }}
    </p>
  </div>
</template>

<script setup>
const route = useRoute()
const query = route.query
</script>
