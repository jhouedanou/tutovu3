<script setup>
import { ref } from 'vue'
//variables
const msg = ref('Tuto Vue 3');
const inputMsg = ref('Saisir un texte');

const submitForm = () => {
  console.log(inputMsg.value)
};
</script>
<template>
  <main>
    <h1> {{ msg.toUpperCase() }}</h1>
    <p>{{ inputMsg }}</p>
    <input type="text" name="toto" id="toto" v-model="inputMsg" />
    <button @click="submitForm">Valider</button>
  </main>

</template>
<style scoped>
input {
  width: 80vw;
  height: 42px;
}

p {
  font-size: 1.5em;
  font-weight: bold;

}

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
