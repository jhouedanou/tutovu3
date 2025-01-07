<script setup>
import { ref } from "vue";
import Title from "./Title.vue";
import ProjectSingle from "./ProjectSingle.vue";
let projects = ref([
  {
    name: "Portfolio Vue.js",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    tags: "Vue.js;JavaScript;CSS",
    description: "Un portfolio moderne et responsive développé avec Vue.js",
    tasks:
      "Développement de composants réutilisables;Intégration d'animations fluides;Optimisation des performances",
  },
  {
    name: "Application de Gestion de Tâches",
    image:
      "https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557571_1280.jpg",
    tags: "Vue.js;Vuex;Firebase",
    description:
      "Une application de gestion de tâches avec authentification et stockage en temps réel",
    tasks:
      "Implémentation de l'authentification;Gestion d'état avec Vuex;Intégration de Firebase",
  },
  {
    name: "E-commerce Bio",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
    tags: "Vue.js;Node.js;MongoDB",
    description: "Plateforme de vente en ligne de produits biologiques",
    tasks: "Création du panier d'achat;Système de paiement;Gestion des stocks",
  },
  {
    name: "Dashboard Analytics",
    image:
      "https://cdn.pixabay.com/photo/2017/10/25/19/45/analytics-2889040_1280.jpg",
    tags: "Vue.js;Chart.js;API REST",
    description: "Tableau de bord pour visualiser les données analytiques",
    tasks:
      "Intégration de graphiques;Analyse de données en temps réel;Filtres dynamiques",
  },
  {
    name: "Application Météo",
    image:
      "https://cdn.pixabay.com/photo/2018/08/23/07/35/weather-3625405_1280.jpg",
    tags: "Vue.js;API OpenWeather;Géolocalisation",
    description: "Application météo avec prévisions sur 7 jours",
    tasks: "Intégration API météo;Géolocalisation;Affichage des prévisions",
  },
  {
    name: "Réseau Social Photos",
    image:
      "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg",
    tags: "Vue.js;AWS;Socket.io",
    description:
      "Plateforme de partage de photos avec fonctionnalités sociales",
    tasks:
      "Upload de photos;Système de likes et commentaires;Chat en temps réel",
  },
]);
</script>

<template>
  <div id="projets">
    <Title title="Mes projets" />
    <ProjectSingle
      class="mt-4 mb-4"
      v-for="(project, index) in projects"
      :key="project.name"
      :project="project"
      :reverse="index % 2 === 0 ? false : true"
    >
      {{ index % 2 }}
    </ProjectSingle>
  </div>
</template>

<style scoped>
.project {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 50px;
  margin-top: 35px;
}

.project .left h3 {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

.project .left img {
  width: 100%;
}

.project .right {
  padding-top: 40px;
}

.project .right .tag {
  display: block;
  float: left;
  background-color: #333746;
  padding: 8px 16px;
  margin-right: 12px;
  border-radius: 5px;
  font-weight: bold;
}

.project .right .description {
  clear: both;
  margin-top: 50px;
  font-size: 17px;
}

.project .right .tasks {
  margin-top: 20px;
  font-size: 17px;
}

.reverse {
  order: 1;
}

.fade-in {
  opacity: 0;
  transition: 0.3s all ease-out;
  transform: scale(0.8);
  display: inline-block;
}

@media screen and (max-width: 905px) {
  .project {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
  }
  .project .right {
    padding-top: 0px;
  }
  .reverse {
    order: 0;
  }
}

@media screen and (max-width: 450px) {
  .project .right .tag {
    margin-bottom: 10px;
  }
}
</style>
