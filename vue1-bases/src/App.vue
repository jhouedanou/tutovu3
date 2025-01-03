<script setup>
import { ref, computed, watch } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
//var
let id = 0;
const msg = ref("Tuto VUE 3");
const question = ref("");
const answer = ref(
  "Questions usually contain a question mark. Ex. Where are you going?"
);
const loading = ref(false);
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes("?")) {
    loading.value = true;
    answer.value = "Thinking...";
    try {
      const rest = await fetch("https://yesno.wtf/api");
      answer.value = (await rest.json()).answer;
    } catch (error) {
      answer.valuie = "Error ! could not reach the Api" + error;
    } finally {
      loading.value = false;
    }
  }
});
</script>
<template>
  <div class="page-wrapper">
    <main class="container"></main>
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
