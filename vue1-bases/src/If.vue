<script setup>
import { ref } from 'vue'
//variables
const msg = ref('Tuto Vue 3')
const jour = ref(true)

const toggleJourNuit = () => {
  jour.value = !jour.value
}
</script>

<template>
  <main id="main" :class="[!jour ? 'nuit' : '', 'container p-5']">

    <div class="box">
      <h1 class="title is-1 has-text-centered">{{ msg.toUpperCase() }}</h1>
      
      <div class="columns is-centered my-5">
        <div class="column is-half has-text-centered">
          <h2 v-show="jour" class="subtitle is-3 has-text-primary">Jour</h2>
          <h2 v-show="!jour" class="subtitle is-3 has-text-info">Nuit</h2>
        </div>
      </div>

      <div class="has-text-centered">
        <button @click="toggleJourNuit" class="button is-primary is-medium">
          Changer
        </button>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
#main {
  background-color: #f5f5f5;
  &.nuit {
    background-color: #333;
  }
}

</style>
