<script setup>
defineProps({
  languages: {
    type: String,
    required: true,
  },
  Frameworks: {
    type: String,
    required: true,
  },
  Libraries: {
    type: String,
    required: true,
  },
  Tools: {
    type: String,
    required: true,
  },
  Concepts: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <article class="resume-entry">
    <ul class="tech-list">
      <li>languages: {{ languages }}</li>
      <li>Frameworks: {{ Frameworks }}</li>
      <li>Libraries: {{ Libraries }}</li>
      <li>Tools: {{ Tools }}</li>
      <li>Concepts: {{ Concepts }}</li>
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

.tech-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  /* margin: 0.75rem 0 0; */
  /* padding-left: 1.25rem; */
}

.tech-list li+li {
  margin-top: 0.3rem;
}

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
