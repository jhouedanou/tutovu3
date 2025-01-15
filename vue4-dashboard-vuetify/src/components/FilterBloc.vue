<template>
  <v-sheet rounded="lg" min-height="260" class="pa-3">
    <v-list-item-title class="text-h4 mb-1 mt-2">Filter:</v-list-item-title>
    <v-text-field
      v-model="searchValue"
      label="Search value:"
      density="comfortable"
    />
  </v-sheet>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const searchValue = ref("");
const emit = defineEmits(["searchValueChangerd"]);
watch(searchValue, () => {
  emit("searchValueChangerd", searchValue.value);
});
</script>

<style></style>
