<script setup>
import { ref, computed, watch, onMounted } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HelloWorld from "./components/hello-world.vue";
</script>

<template>
  <main>
    <HelloWorld />
  </main>
</template>

<style lang="scss">
.page-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 60vw;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
}
</style>
