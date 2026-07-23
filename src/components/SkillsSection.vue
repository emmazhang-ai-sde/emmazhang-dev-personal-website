<script setup>
import { skills } from '../data/resume.js'

const tones = ['blue', 'purple', 'amber', 'green']
</script>

<template>
  <section id="skills" class="section">
    <div class="section-inner">
      <p class="section-eyebrow" v-reveal>Skills</p>
      <h2 class="section-title" v-reveal>The toolbox.</h2>

      <div class="skills-grid">
        <div
          v-for="(group, i) in skills"
          :key="group.category"
          class="skill-card"
          v-reveal="{ delay: i * 80 }"
        >
          <h3 class="skill-category">{{ group.category }}</h3>
          <div class="skill-items">
            <span
              v-for="item in group.items"
              :key="item"
              class="chip"
              :class="`chip--${tones[i % tones.length]}`"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.skill-card {
  background: var(--card-bg);
  border: 1px solid var(--grey-line);
  border-radius: var(--r-card);
  box-shadow: var(--shadow-card);
  padding: 32px;
}

.skill-category {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 16px;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 734px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
