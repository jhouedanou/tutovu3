<template>
    <h1>Article {{ route.params.id }}</h1>
    <p>Contenu de l'article {{ route.params.id }}</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eius ad mollitia ipsum dolore sit et, animi repudiandae exercitationem earum nobis tempora corrupti dolor sequi quos! Aut a cum quam.</p>
    <NuxtLink to="/blog">Retour au blog</NuxtLink>
</template>

<script setup lang="ts">
    const route = useRoute()
    const id = route.params.id
    // fetch API
</script>