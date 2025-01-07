<script setup></script>

<template>
  <div id="skills">
    <div class="text-highlight-1 section-title">Mes technologies préférées</div>
    <div id="icons-list">
      <div class="techno-container">
        <i class="devicon-vuejs-plain"></i>
      </div>
      <div class="techno-container">
        <i class="devicon-javascript-plain colored"></i>
      </div>
      <div class="techno-container">
        <i class="devicon-php-plain"></i>
      </div>
      <div class="techno-container">
        <i class="devicon-jquery-plain-wordmark"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
#icons-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
}

.techno-container {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.techno-container:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 255, 255, 0.2);
}

.techno-container i {
  font-size: 3rem;
  color: #fff;
}
</style>
