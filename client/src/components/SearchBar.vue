<script setup>
defineProps({
})
</script>

<template>
    <div class="search-wrapper">
        <input type="text" v-model="searchQuery" placeholder="Search..." class="search-bar"></input>
    </div>
</template>

<style scoped>
.search-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-bar {
    /* 1. Makes the edges rounded */
    border-radius: 24px;

    /* 2. Standard professional search bar styling */
    padding: 8px 16px;
    /* Adds breathing room inside the box */
    border: 1px solid #ccc;
    /* Gives it a clean, subtle border outline */
    outline: none;
    /* Removes the default ugly browser focus ring */
    width: 500px;
    /* Allows it to scale to fill its container */
    font-size: 1rem;
}

.search-bar:focus {
      border-color: #3b82f6;  /* Changes to a clean blue accent color */
}
</style>