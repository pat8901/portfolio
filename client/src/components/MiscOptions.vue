<script setup>
import ToggleButton from './ToggleButton.vue';
defineProps({
    githubUrl: {
        type: String,
        required: true
    },
    linkedinUrl: {
        type: String,
        required: true
    }
})  
</script>

<template>
    <div class="misc-options">
        <ToggleButton />
        <a :href="githubUrl" target="_blank" rel="noopener noreferrer">
            <img src="/images/GitHub_Lockup_Black.png" alt="GitHub Logo" class="github-image">
        </a>
        <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer">
            <img src="/images/LI-Logo.png" alt="LinkedIn Logo" class="linkedin-image">

        </a>
    </div>
</template>

<style scoped>
.misc-options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 300px;
    /* gap: 20px; */
}

.github-image {
    width: 75px;
    /* border-radius: 50%;    */
}

.linkedin-image {
    width: 75px;
    /* border-radius: 50%;    */
}
</style>