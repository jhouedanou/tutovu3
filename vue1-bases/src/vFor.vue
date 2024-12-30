<script setup>
import { ref } from "vue";
//var
let id = 0;
const msg = ref("Tuto VUE 3");
let newItem = ref("");
const items = ref([
  { id: id++, text: "Item 1" },
  { id: id++, text: "Item 2" },
  { id: id++, text: "Item 3" },
]);
//fn
const addItem = () => {
  items.value.push({ id: id++, text: newItem.value });
  newItem.value = "";
};
const removeItem = (id) => {
  items.value = items.value.filter((item) => item !== id);
};
</script>

<template>
  <div class="page-wrapper">
    <main>
      <h2>{{ msg }}</h2>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.text }}
          <button class="button is-primary is-medium" @click="removeItem(item)">
            x
          </button>
        </li>
      </ul>
      <div class="control">
        <input type="text" v-model="newItem" />
      </div>

      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <button class="button is-primary is-medium" @click="addItem">
          Add Item
        </button>
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
