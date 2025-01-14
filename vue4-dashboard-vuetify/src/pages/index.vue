<template>
  <v-app>
    <v-app-bar
      class="px-3"
      color="grey-darken-4"
      flat
      density="compact"
    >
      <v-tabs
        v-model="selectedTab"
        centered
        color="grey-darken-1"
      />
    </v-app-bar>
  </v-app>
</template>
<script lang="ts" setup>
//imports
import{ref,watch , onMounted} from 'vue';
let selectedTab = ref(0);
const links = ref(["Dashboard","About"]);
</script>
