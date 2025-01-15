<template>
  <v-card class="pa-3" color="blue-grey-darken-4" elevation="1">
    <v-card-title class="text-h5 white--text"
      ><ShowMetric :isUp="isUp" />{{ blocValue }}</v-card-title
    >
    <v-card-subtitle>{{ blocTitle }}</v-card-subtitle>
  </v-card>
</template>
<script setup lang="ts">
import ShowMetric from "./ShowMetric.vue";
defineProps<{
  blocTitle: string;
  blocValue: string;
  isUp: boolean;
}>();
</script>
