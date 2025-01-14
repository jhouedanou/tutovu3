<template>
  <v-app>
    <!-- app bar -->
    <v-app-bar class="px-3" color="grey-darken-4" flat density="compact">
      <v-spacer />
      <v-tabs v-model="selectedTab" centered color="grey-darken-1">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
      <v-spacer />
    </v-app-bar>
    <!-- main content -->

    <v-main class="px-3">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="2"> </v-col>
          <v-col cols="12" sm="8">
            <v-sheet
              v-if="selectedTab == 0"
              min-height="70vh"
              rounded="lg"
              class="pa-15"
            >
              <!-- page 0 -->
              <h2 class="mt-4">Apps list:</h2>
              <!-- loading animation -->
              <v-progress-circular
                v-if="loading"
                color="priamry"
                size="64"
                class="ma-4"
                indeterminate
              />
              <!-- API -->
              {{ groupedData }}
            </v-sheet>
            <v-sheet v-else min-height="70vh" rounded="lg" class="pa-15">
              <!-- page 1 -->
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="2"> </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts" setup>
//imports
import { ref, onMounted, watch } from "vue";
import useGroupApps from "../functions/useGroupApps";
const selectedTab = ref(0);
const loading = ref(false);
//variables
const links = ref(["Dashboard", "About"]);
const apiResult = ref();
const groupedData = ref([]);
//functions
onMounted(async () => {
  fetchMonetizationApi();
});
//un watcher qui modifiera la valeur de groupedData, chaque fois que la valeur de apiResult change
watch(apiResult, (newValue) => {
  groupedData.value = useGroupApps(newValue.data);
});
//#API
//https://api.allorigins.win/raw?url=
//https://api.codetabs.com/v1/proxy?quest=
//https://cors-anywhere.herokuapp.com/
const fetchMonetizationApi = async () => {
  loading.value = true;
  const corsProxy = "https://api.codetabs.com/v1/proxy?quest=";
  const apiUrl =
    "https://www.anthony-cardinale.fr/_placeholder/monetization-api.json";

  fetch(corsProxy + apiUrl)
    .then((response) => response.json())
    .then((data) => (apiResult.value = data))
    .finally(() => (loading.value = false))
    .catch((error) => console.error("Erreur:", error));
};
</script>
