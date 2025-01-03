<script setup>
import { ref, computed } from "vue";
import "bulma/css/bulma.min.css";

//var
let id = 0;
const msg = ref("Tuto VUE 3");
const fName = ref("Jean-Luc Lionel");
const lName = ref("Houédanou");
//fn
const fullName = computed(() => {
  return fName.value + " " + lName.value.toUpperCase();
});
</script>
<template>
  <div class="page-wrapper">
    <main class="container">
      <h2 class="title is-2">{{ msg }}</h2>
      <p class="subtitle">Bonjour, {{ fullName }}</p>
    </main>
  </div>
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
}
</style>
