<script setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import ResumeEntry from '../components/ResumeEntry.vue'
import ProjectEntry from '../components/ProjectEntry.vue'
import { getResume } from '../api'
import EducationEntry from '@/components/EducationEntry.vue'
import TechEntry from '@/components/TechEntry.vue'

const resume = ref({});
const isLoading = ref(true);
const loadError = ref('');

const activeSection = ref('');
const resumeScroller = ref(null);
let observer = null;

onMounted(async () => {
    // TODO: Is there a better clean way to handle a list of api calls that happen when a page loads?
    try {
        resume.value = await getResume()
    } catch (error) {
        loadError.value = error instanceof Error ? error.message : 'Unable to load resume entries.'
    } finally {
        isLoading.value = false
    }

    // v-if creates the sections only after loading finishes. Wait until Vue has
    // rendered them before querying and observing them.
    await nextTick()

    const options = {
        root: resumeScroller.value,
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0,
    }

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id
            }
        })
    }, options)

    resumeScroller.value.querySelectorAll('.resume-section').forEach((section) => {
        observer.observe(section)
    })
})

onUnmounted(() => {
    if (observer) observer.disconnect();
});
</script>

<template>
    <div class="home">

        <div class="resume-container">
            <nav>
                <ul class="resume-nav">
                    <li><a href="#purpose" :class="{ active: activeSection === 'purpose' }">Purpose</a></li>
                    <li><a href="#education" :class="{ active: activeSection === 'education' }">Education</a></li>
                    <li><a href="#employment" :class="{ active: activeSection === 'employment' }">Employment</a></li>
                    <li><a href="#projects" :class="{ active: activeSection === 'projects' }">Projects</a></li>
                    <li><a href="#technologies" :class="{ active: activeSection === 'technologies' }">Technologies</a>
                    </li>
                </ul>
            </nav>

            <div ref="resumeScroller" class="resume">
                <p v-if="isLoading" class="resume-message">Loading experience...</p>
                <p v-else-if="loadError" class="resume-message" role="alert">{{ loadError }}</p>
                <p v-else-if="resume.employment.length === 0" class="resume-message">No experience entries yet.</p>
                <section class="resume-section" id="purpose" v-if="!isLoading">
                    <div class="name">
                        <h1>{{ resume.details.name }}</h1>
                    </div>
                    <div class="purpose-image">
                        <img src="/images/space.png" alt="Space Image" class="profile-image">
                    </div>
                    <p class="purpose-statement">{{ resume.details.purpose }}</p>
                </section>

                <!-- Load education -->
                <section class="resume-section" id="education" v-if="!isLoading">
                    <h1>Education</h1>
                    <EducationEntry v-bind="resume.education" />
                </section>

                <!-- Load jobs -->
                <section class="resume-section" id="employment" v-if="!isLoading">
                    <h1>Employment</h1>
                    <ResumeEntry v-for="(job, index) in resume.employment" :key="index" v-bind="job" />
                </section>

                <!-- Load projects -->
                <section class="resume-section" id="projects" v-if="!isLoading">
                    <h1>Projects</h1>
                    <ProjectEntry v-for="(project, index) in resume.projects" :key="index" v-bind="project" />
                </section>

                <!-- Load technologies -->
                <section class="resume-section" id="technologies" v-if="!isLoading">
                    <h1>Technologies</h1>
                    <TechEntry v-bind="resume.technologies" />
                </section>
            </div>
        </div>
    </div>
</template>

<style>
.home {
    height: 100%;
    min-height: 0;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
}

@media (min-width: 1024px) {
    .home {
        grid-template-rows: minmax(0, 1fr);
    }
}

p {
    font-size: 20px;
    /* text-align: center; */
    padding: 20px
}

img {
    padding: 20px;
    width: 100%;
    max-width: 1000px;
    height: auto;
    object-fit: cover;
    justify-self: center;
}

.name {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.25rem;
    font-weight: bold;
}

.purpose-image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.profile-image {
    width: 350px;
    height: 350px;
    object-fit: cover;
    /* border-radius: 50%;    */
}

.resume-nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: none;
    padding: 10px;
}

.resume-nav li {
    font-size: 1.25rem;
    font-weight: 500;
}

.resume-nav a {
    text-decoration: none;
    color: #666;
    font-size: 1.25rem;
    transition: all 0.3s ease;
    padding-left: 0.5rem;
    border-left: 3px solid transparent;
}

.resume-nav a.active {
    color: #3b82f6;
    font-weight: 600;
    border-left-color: #3b82f6;
}

.resume-section {
    padding-bottom: 4rem;
}

.resume-section:last-of-type {
    padding-bottom: 20rem;
}

.purpose-statement {
    padding: 20px;
    width: 100%;
    height: auto;
}

.employment {
    padding: 20px;
    width: 100%;
    height: auto;
}

.projects {
    padding: 20px;
    width: 100%;
    height: auto;
}

.technologies {
    padding: 20px;
    width: 100%;
    height: auto;
}

.purpose-statement {
    padding: 20px;
    width: 100%;
    height: auto;
}

.resume-container {
    display: grid;
    grid-template-columns: 150px 1fr;
    min-height: 0;
    width: 100%;
}

.resume {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    min-height: 0;
    overflow: auto;
    scroll-behavior: smooth;
    padding-inline: 10rem;
}
</style>