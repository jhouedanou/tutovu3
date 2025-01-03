<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: false,
    default: "Message par défaut",
  },
  color: {
    type: String,
    required: false,
  },
});

const emit = defineEmits("[compMsg]");
const clickHandler = () => {
  //  console.log("click " + props.msg);
  emit("compMsg", props.msg);
};
</script>
<template>
  <h2 :class="color">{{ msg }}</h2>
  <button type="button" class="btn btn-primary" @click="clickHandler">
    Cliquez ici
  </button>
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
h2 {
  color: rgb(168, 0, 154);
  font-size: 40px;
}
.red {
  color: red !important;
}
.blue {
  color: blue !important;
}
.green {
  color: green !important;
}
.yellow {
  color: yellow !important;
}
.purple {
  color: purple !important;
}
.orange {
  color: orange !important;
}
.pink {
  color: pink !important;
}
.brown {
  color: brown !important;
}
.black {
  color: black !important;
}
.white {
  color: white !important;
}
</style>
