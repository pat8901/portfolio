<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';
import SearchBar from '@/components/SearchBar.vue'
import MiscOptions from '@/components/MiscOptions.vue'
import { getResume } from './api'

// Initialize as an empty object
const resume = ref({});

onMounted(async () => {
  try {
    // TODO: Make it so that only one api call is made to getResume() and the data is shared between HomeView and App.vue
    resume.value = await getResume();
  } catch (error) {
    console.error("Failed to load link data:", error);
  }
});
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <SearchBar />
      <MiscOptions v-if="resume?.details?.github" :githubUrl="resume.details.github"
        :linkedinUrl="resume.details.linkedin" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.wrapper {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  /* padding: 1rem; */
  background-color: #ffffff;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  /* gap: 1rem; */
  align-items: center;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #000000;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: grid;
    grid-template-rows: 1fr;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    /* display: grid;
    grid-template-rows: 1fr 1fr 1fr */
  }

  nav {
    row-gap: 2.5rem;
    text-align: center;
    margin-left: -1rem;
    font-size: 1.25rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
