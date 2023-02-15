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
