<script setup>
import { education } from '../data/resume.js'
</script>

<template>
  <section id="education" class="section">
    <div class="section-inner">
      <div class="edu-band" v-reveal>
        <h2 class="edu-school">{{ education.school }}</h2>
        <p class="edu-degree">{{ education.degree }}</p>

        <div class="edu-stats">
          <div v-for="stat in education.stats" :key="stat.label" class="edu-stat">
            <p class="edu-stat-value">{{ stat.value }}</p>
            <p class="edu-stat-label">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu-band {
  background: var(--grad-mint-soft);
  border-radius: var(--r-block);
  padding: 64px 48px;
  text-align: center;
}

.edu-school {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.1;
}

.edu-degree {
  font-size: 18px;
  color: var(--text-soft);
  margin-top: 12px;
}

.edu-stats {
  margin-top: 44px;
  display: flex;
  justify-content: center;
  gap: clamp(32px, 8vw, 96px);
  flex-wrap: wrap;
}

.edu-stat-value {
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.edu-stat-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-soft);
  margin-top: 4px;
}

@media (max-width: 734px) {
  .edu-band {
    padding: 44px 24px;
  }
}
</style>
