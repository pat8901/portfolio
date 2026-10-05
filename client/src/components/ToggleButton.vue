<script setup>
import { ref } from 'vue';

// Tracks the toggle state (starts as OFF)
const isActive = ref(false);

// Flips true to false, or false to true
const toggleState = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <button @click="toggleState" class="toggle-btn">
    {{ isActive ? 'Light' : 'Dark' }}
  </button>
</template>

<style scoped>
.toggle-btn {
  /* padding: 10px 24px; */
  height: 20px;
  width: 60px;

  font-size: 14px;
  font-weight: 600;
  border: 2px solid #ccc;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Changes appearance when isActive is true */
.toggle-btn.is-active {
  background-color: #3b82f6;
  border-color: #3b82f6;
  color: #f0f0f0;
}
</style>