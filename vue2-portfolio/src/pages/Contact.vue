<template>
  Page de contact {{ route.params.id
  }}<RouterLink to="/">retour à l'accueil</RouterLink>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
