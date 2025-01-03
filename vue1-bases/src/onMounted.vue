<script setup>
import { ref, computed, watch, onMounted } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const msg = ref("Tuto VUE 3");
const msg2 = ref("  ");
const todos = ref(" ");
onMounted(async () => {
  //appel à l'api
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  todos.value = await response.json();
});
</script>

<template>
  <main>
    <h1>{{ msg }}</h1>
    <p>{{ msg2 }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.userId">
        <input type="checkbox" v-model="todo.completed" :id="todo.id" />
        {{ todo.title }}
      </li>
    </ul>
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
