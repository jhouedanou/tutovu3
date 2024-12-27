<script setup>
import { ref } from 'vue'
//variables
const msg = ref('Modifier le nombre');
const count = ref(0);
//fn
const incrementCount = () => {
  count.value++
};
const resetCount = () => {
  count.value = 0
};

const changeMsg = () => {
  msg.value = 'Toto'
};
</script>
<template>
  <main>
    <h1> {{ msg.toUpperCase() }}</h1>
    <h2 :id="'id_' + count" :class="count < 10 ? 'green' : 'red'">Nombre = {{ count }}</h2>
    <button @click="incrementCount">Incrémenter le nombre</button>
    <button :style="count <= 0 ? 'display:none' : 'display:block'" @click="resetCount">Réinitialiser le nombre </button>
  </main>
  
</template>
<style scoped>
h1:hover {
  cursor: pointer;
}

.green {
  color: rgb(0, 134, 22);
}

.red {
  color: red;
}
</style>
