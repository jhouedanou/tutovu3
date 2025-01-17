<template>
    <h1>Page d'accueil</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium, dolorem quos perspiciatis voluptatum aut impedit velit! Nulla, aperiam nostrum, voluptate amet doloremque, illum dignissimos adipisci architecto perspiciatis id sequi.</p>
    <SimpleButton>Mon BTN</SimpleButton>
    <img class="animate__animated animate__bounce" src="~/assets/unity-book.png" width="220" />
</template>

<script setup lang="ts">
useHead({
  link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }]
})
</script>