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
          <v-col cols="12" sm="2" />
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
              <!-- affichage 2 l'api sousforme de datable -->
              <v-data-table
                v-if="groupedData"
                :items="groupedData"
                :headers="headers"
                item-value="app"
                v-model:expanded="expanded"
                show-expand="true"
              >
                <template v-slot:header.app="{ column }">
                  {{ column.title.toUpperCase() }}
                </template>
                <template v-slot:expanded-row="{ columns, item }">
                  <tr>
                    <td :colspan="columns.length">
                      <div class="pa-5">
                        The country which generated the most revenue for
                        {{ item.app }} is{{ useGetBestCountry(item) }}
                        <!-- graphique -->
                        <BarChart
                          class="d-flex mx-auto my-0"
                          :data="[
                            item.totalRevenuesUS,
                            item.totalRevenuesUK,
                            item.totalRevenuesFR,
                            item.totalRevenuesJP,
                            item.totalRevenuesAU,
                            item.totalRevenuesCN,
                          ]"
                        />
                        <v-row>
                          <v-col
                            >Total ads views: <b>{{ item.totalViews }}</b>
                            <br />
                            Total conversions:
                            <b>{{ item.totalConversions }}</b>
                            <br />
                            Conversions %:
                            <b
                              >{{
                                (
                                  (item.totalConversions * 100) /
                                  item.totalViews
                                ).toFixed(2)
                              }}
                              %</b
                            >
                            <br />
                            Total revenues:
                            <b>{{ useFormatRevenues(item.totalRevenues) }}</b>
                          </v-col>
                          <v-col
                            >Total banner revenues:
                            <b>{{ useFormatRevenues(item.banner) }}</b
                            ><br />
                            Total full-screen revenues:
                            <b>{{ useFormatRevenues(item.fullscreen) }}</b
                            ><br />
                            Total video revenues:
                            <b>{{ useFormatRevenues(item.video) }}</b
                            ><br />
                            Total rewarded revenues:
                            <b>{{ useFormatRevenues(item.rewarded) }}</b
                            ><br
                          /></v-col>
                        </v-row>
                      </div>
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </v-sheet>
            <v-sheet v-else min-height="70vh" rounded="lg" class="pa-15">
              <!-- page 1 -->
            </v-sheet>
          </v-col>
          <v cols="12" sm="2" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts" setup>
//imports
import { ref, onMounted, watch } from "vue";
import useGroupApps from "../functions/useGroupApps";
import useFormatRevenues from "../functions/useFormatRevenues";
import useGetBestCountry from "../functions/useGetBestCountry";
const selectedTab = ref(0);
const loading = ref(false);
//variables
const links = ref(["Dashboard", "About"]);
const apiResult = ref();
const groupedData = ref([]);
let expanded = ref([]);

const headers = ref([
  { title: "App", key: "app" },
  { title: "US", key: "totalRevenuesUS" },
  { title: "UK", key: "totalRevenuesUK" },
  { title: "FR", key: "totalRevenuesFR" },
  { title: "JP", key: "totalRevenuesJP" },
  { title: "CN", key: "totalRevenuesCN" },
  { title: "AU", key: "totalRevenuesAU" },
  { title: "Total", key: "totalRevenues" },
  { title: "", key: "data-table-expand" },
]);
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
