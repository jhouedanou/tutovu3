<script setup></script>

<template>
  <h1 class="text-highlight-1 navbar navbar-dark bg-dark shadow-lg p-3">
    <slot>Nom du développeur</slot>
  </h1>
</template>

<style scoped>
.navbar {
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}

.text-highlight-1 {
  color: #ffffff;
  font-weight: bold;
}
</style>
