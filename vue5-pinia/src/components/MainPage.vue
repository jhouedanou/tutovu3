<script setup lang="ts">
import { useRecettesStore } from "@/stores/recettes";
const storeRecette = useRecettesStore();
console.log(storeRecette.recettes);
</script>

<template>{{ storeRecette.recettes }}</template>

<style scoped></style>
