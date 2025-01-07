<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Titre par défaut",
  },
});
</script>

<template>
  <h3 class="text-highlight-1 section-title text-xl font-bold mb-4">
    {{title}}
  </h3>
</template>

<style scoped></style>
