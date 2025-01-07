<script setup>
import { ref } from "vue";
import Title from "./Title.vue";
let activeBloc = ref(0);
let experiences = ref([
  {
    societe: "TechVision Solutions",
    title: "Développeur Web",
    date: "Depuis 2007",
    line1: "Développement de sites web",
  },
  {
    societe: "WebSphere Technologies",
    title: "Développeur Full Stack",
    date: "2018 - 2022",
    line1: "Développement d'applications web complexes",
    line2: "Gestion de bases de données",
    line3: "Architecture de solutions",
  },
  {
    societe: "Digital Innovations",
    title: "Lead Developer",
    date: "2015 - 2018",
    line1: "Gestion d'équipe de développeurs",
    line2: "Planification de projets",
    line3: "Formation technique",
  },
  {
    societe: "MobileFirst Labs",
    title: "Développeur Mobile",
    date: "2012 - 2015",
    line1: "Création d'applications iOS et Android",
    line2: "Optimisation des performances",
    line3: "Intégration d'APIs",
  },
  {
    societe: "FrontEnd Masters",
    title: "Développeur Frontend",
    date: "2010 - 2012",
    line1: "Intégration de maquettes",
    line2: "Développement d'interfaces responsives",
    line3: "Optimisation UX/UI",
  },
]);
const showXp = (id) => {
  activeBloc.value = id;
};
</script>

<template>
  <div id="xp" class="pt-4 pb-4">
    <Title title="Mes expériences" />
    <div class="row">
      <div class="col-4">
        <div id="left" class="mb-2">
          <!-- liste des socitétés  -->
          <template v-for="(experience, index) in experiences">
            <p
              @click="showXp(index)"
              :class="activeBloc === index ? 'active' : ''"
              class="mb-2 company fw600 text-lg font-semibold"
            >
              {{ experience.societe }}
            </p>
          </template>
        </div>
      </div>
      <div class="col-8">
        <div id="right">
          <template v-for="(job, index) in experiences" :key="index">
            <div
              :class="index === activeBloc ? 'block' : 'd-none hide hidden'"
              class="job-details"
              :id="'block' + job.id"
            >
              <h3 class="fw600">{{ job.title }}</h3>
              <span>{{ job.date }}</span>
              <div class="tache">
                <ul>
                  <li v-if="job.line1">{{ job.line1 }}</li>
                  <li v-if="job.line2">{{ job.line2 }}</li>
                  <li v-if="job.line3">{{ job.line3 }}</li>
                </ul>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#left {
  p {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
