<script setup>
import { experience } from '../data/resume.js'
</script>

<template>
  <section id="experience" class="section section--alt">
    <div class="section-inner">
      <p class="section-eyebrow" v-reveal>Experience</p>
      <h2 class="section-title" v-reveal>Things I've built for real people.</h2>

      <article
        v-for="(job, i) in experience"
        :key="job.company"
        class="job-card"
        v-reveal="{ delay: i * 80 }"
      >
        <div class="job-header">
          <div>
            <h3 class="job-role">{{ job.role }}</h3>
            <p class="job-company">
              {{ job.company }}
              <span class="job-descriptor"> — {{ job.descriptor }}</span>
            </p>
          </div>
          <div class="job-meta">
            <p>{{ job.dates }}</p>
            <p>{{ job.location }}</p>
          </div>
        </div>

        <ul class="job-bullets">
          <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
        </ul>

        <div class="job-stack">
          <span v-for="tech in job.stack" :key="tech" class="chip">{{ tech }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.job-card {
  background: var(--card-bg);
  border-radius: var(--radius-card);
  padding: 40px;
  margin-bottom: 24px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.job-role {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.job-company {
  font-size: 17px;
  color: var(--text);
  margin-top: 4px;
}

.job-descriptor {
  color: var(--text-tertiary);
}

.job-meta {
  text-align: right;
  font-size: 14px;
  color: var(--text-tertiary);
  line-height: 1.5;
  flex-shrink: 0;
}

.job-bullets {
  margin: 24px 0 0;
  padding-left: 20px;
  display: grid;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 16px;
}

.job-stack {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 734px) {
  .job-card {
    padding: 28px 24px;
  }

  .job-meta {
    text-align: left;
  }
}
</style>
