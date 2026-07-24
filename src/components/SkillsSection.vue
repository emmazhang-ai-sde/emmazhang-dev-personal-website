<script setup>
import { skills } from '../data/resume.js'
</script>

<template>
  <section id="skills" class="section">
    <div class="section-inner">
      <h2 class="section-title" v-reveal>The toolbox.</h2>

      <div class="skills-panel" v-reveal>
        <div v-for="group in skills" :key="group.category" class="skill-row">
          <h3 class="skill-category">{{ group.category }}</h3>
          <div class="skill-items">
            <span v-for="item in group.items" :key="item" class="skill-chip">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-panel {
  background: var(--bg-alt);
  border-radius: var(--r-block);
  padding: 12px 44px;
}

.skill-row {
  display: grid;
  grid-template-columns: 230px 1fr;
  gap: 28px;
  align-items: baseline;
  padding: 30px 0;
  border-bottom: 1px solid var(--grey-line);
}

.skill-row:last-child {
  border-bottom: none;
}

.skill-category {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-chip {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-soft);
  background: var(--card-bg);
  border: 1px solid var(--grey-line);
  border-radius: var(--r-pill);
  padding: 8px 16px;
  transition: border-color 0.2s var(--ease-out);
}

.skill-chip:hover {
  border-color: var(--brand);
}

@media (max-width: 734px) {
  .skills-panel {
    padding: 6px 22px;
    border-radius: var(--r-card);
  }

  .skill-row {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 24px 0;
  }
}
</style>
