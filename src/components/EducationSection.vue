<script setup>
import { education } from '../data/resume.js'
</script>

<template>
  <section id="education" class="section section--alt">
    <div class="section-inner education">
      <p class="section-eyebrow" v-reveal>Education</p>
      <h2 class="section-title" v-reveal>{{ education.school }}</h2>
      <p class="education-degree" v-reveal>{{ education.degree }}</p>
      <p class="education-meta" v-reveal>
        GPA {{ education.gpa }} · {{ education.dates }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.education {
  text-align: center;
}

.education .section-title {
  margin-bottom: 16px;
}

.education-degree {
  font-size: 21px;
  color: var(--text);
}

.education-meta {
  font-size: 17px;
  color: var(--text-tertiary);
  margin-top: 8px;
}
</style>
