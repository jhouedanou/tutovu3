<template>
    <h1>Liste des articles</h1>

    <div v-if="data">
        <ul>
            <li v-for="i in data"><NuxtLink :to="'/blog/article-'+i.id">{{ i.title }}</NuxtLink></li>
        </ul>
    </div> 
</template>

<script setup lang="ts">
const { data } = 
await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    
})

</script>