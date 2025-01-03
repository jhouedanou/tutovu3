<script setup>
import { ref, computed, watch, onMounted } from "vue";
import PortfolioMain from "./pages/PortfolioMain.vue";
import PageHeader from "./components/PageHeader.vue";
const monNom = ref("Jean Luc Houedanou");
</script>

<template>
  <header>
    <PageHeader>{{ monNom }}</PageHeader>
  </header>
  <main>
    <PortfolioMain />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  line-height: 60px;
}
main {
  width: 100%;
}
</style>
