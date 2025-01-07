<script setup>
import { ref } from "vue";
import Title from "./Title.vue";
let projets = ref([
  {
    name: "Portfolio Vue.js",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    tags: ["Vue.js", "JavaScript", "CSS"],
    description: "Un portfolio moderne et responsive développé avec Vue.js",
    tasks: [
      "Développement de composants réutilisables",
      "Intégration d'animations fluides",
      "Optimisation des performances",
    ],
  },
  {
    name: "Application Météo",
    image:
      "https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_1280.jpg",
    tags: ["Vue.js", "API", "Axios"],
    description: "Application météo en temps réel avec géolocalisation",
    tasks: [
      "Intégration API OpenWeatherMap",
      "Gestion de la géolocalisation",
      "Interface utilisateur intuitive",
    ],
  },
  {
    name: "E-commerce Bio",
    image:
      "https://cdn.pixabay.com/photo/2016/07/24/21/01/thermometer-1539191_1280.jpg",
    tags: ["Vue.js", "Vuex", "Node.js"],
    description: "Plateforme de vente de produits biologiques en ligne",
    tasks: [
      "Système de panier d'achat",
      "Gestion des paiements sécurisés",
      "Interface d'administration",
    ],
  },
]);
</script>

<template>
  <div id="projets">
    <Title title="Mes projets" />
    <template v-for="(projet, index) in projets" :key="index"
      >{{ projet }}
    </template>
  </div>
</template>

<style scoped></style>
