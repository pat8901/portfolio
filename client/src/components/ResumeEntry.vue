<script setup>
defineProps({
  employer: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <article class="resume-entry">
    <header class="entry-header">
      <div>
        <h2>{{ employer }}</h2>
        <h3>{{ title }}</h3>
      </div>
      <p class="entry-dates" aria-label="Employment period">
        {{ startDate }} &ndash; {{ endDate }}
      </p>
    </header>

    <ul v-if="responsibilities.length" class="responsibilities">
      <li v-for="(responsibility, index) in responsibilities" :key="index">
        {{ responsibility }}
      </li>
    </ul>
  </article>
</template>

<style scoped>
.resume-entry {
  padding: 1.25rem;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

h2,
h3 {
  color: var(--color-heading);
  line-height: 1.3;
}

h2 {
  font-size: 1.2rem;
  font-weight: 600;
}

h3 {
  margin-top: 0.2rem;
  font-size: 1rem;
}

.entry-dates {
  flex: 0 0 auto;
  padding: 0;
  font-size: 0.9rem;
  text-align: right;
}

.responsibilities {
  margin: 0.75rem 0 0;
  padding-left: 1.25rem;
}

.responsibilities li + li {
  margin-top: 0.3rem;
}

/* Condition that will run if the user screen is 520px or less */
@media (max-width: 520px) {
  .entry-header {
    flex-direction: column;
    gap: 0.25rem;
  }

  .entry-dates {
    text-align: left;
  }
}
</style>
