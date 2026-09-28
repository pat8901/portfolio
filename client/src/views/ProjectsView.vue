<script setup>
import { ref, onMounted } from 'vue'
import { convertApt } from '@/api'

onMounted(async () => {
  var value = await convertApt();
  console.log(value);
})
</script>

<template>
  <div class="projects">
    <h1>This is a projects page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .projects {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
