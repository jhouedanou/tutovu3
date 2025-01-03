<script setup>
import { ref } from "vue";
import SubComp from "./SubComp.vue";
import ComposantSlot from "./ComposantSlot.vue";
const msg = ref("Hello from component");
const msgPourleSlot = ref("Message pour le slot");
const childMsg = ref("no msg");
const messageFromComponentFn = () => {
  childMsg.value = "Message reçu du composant enfant";
};
</script>
<template>
  <h1>{{ msg }}</h1>
  <h3>{{ childMsg }}</h3>
  <SubComp @compMsg="messageFromComponentFn" :msg="msg" />
  <SubComp
    @compMsg="(msgfromComponent) => (childMsg = msgfromComponent)"
    color="blue"
  />
  <ComposantSlot>Exemple : {{ msgPourleSlot.toUpperCase() }} </ComposantSlot>
  <ComposantSlot></ComposantSlot>
</template>

<style lang="scss" scoped>
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
h1 {
  color: rgb(68, 255, 0);
  font-size: 40px;
}
h2 {
  color: rgb(168, 109, 0);
  font-size: 40px;
}
</style>
