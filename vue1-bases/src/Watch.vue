<script setup>
import { ref, computed, watch } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
//var
let id = 0;
const msg = ref("Tuto VUE 3");
const x = ref(0);
const dbg = ref("");
const locked = ref(false);
const nbMax = 5;
const showAlert = ref(false);
//fn
watch(x, (newX, oldX) => {
  dbg.value = "x = " + newX + " oldX = " + oldX;
  if (newX > nbMax) {
    locked.value = true;
    showAlert.value = true;
  }
});
console.log(showAlert.value);
</script>
<template>
  <div class="page-wrapper">
    <main class="container">
      <h2 class="display-4">{{ msg }}</h2>
      <p class="lead">{{ dbg }}</p>
      <input
        class="form-control"
        :disabled="locked"
        type="number"
        v-model="x"
      />
      <div
        :class="showAlert ? 'alert alert-warning mt-3' : 'd-none'"
        role="alert"
        dismissible
      >
        Nombre maximal d'essais atteints ({{ nbMax }})
      </div>
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



