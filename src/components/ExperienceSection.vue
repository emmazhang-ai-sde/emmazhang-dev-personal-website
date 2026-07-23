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
        <!-- browser-chrome header, jobright style -->
        <div class="job-chrome">
          <span class="dot" /><span class="dot" /><span class="dot" />
          <span class="job-chrome-title">{{ job.company }}</span>
          <span class="job-chrome-dates">{{ job.dates }}</span>
        </div>

        <div class="job-body">
          <div class="job-header">
            <div>
              <h3 class="job-role">{{ job.role }}</h3>
              <p class="job-company">
                {{ job.company }}
                <span class="job-descriptor"> — {{ job.descriptor }}</span>
              </p>
            </div>
            <p class="job-location">{{ job.location }}</p>
          </div>

          <ul class="job-bullets">
            <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
          </ul>

          <div class="job-stack">
            <span v-for="tech in job.stack" :key="tech" class="chip chip--mint">{{ tech }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.job-card {
  background: var(--card-bg);
  border: 1px solid var(--ink-border);
  border-radius: var(--r-card);
  box-shadow: var(--shadow-card);
  margin-bottom: 28px;
  overflow: hidden;
  transition:
    transform 0.25s var(--ease-out),
    box-shadow 0.25s var(--ease-out);
}

.job-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lift);
}

.job-chrome {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-bottom: 1px solid var(--ink-border);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: var(--text);
}

.job-chrome-title {
  margin-left: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
}

.job-chrome-dates {
  margin-left: auto;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
}

.job-body {
  padding: 28px 32px 32px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
}

.job-role {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.job-company {
  font-size: 17px;
  margin-top: 4px;
}

.job-descriptor {
  color: var(--text-tertiary);
}

.job-location {
  font-size: 14px;
  color: var(--text-tertiary);
  flex-shrink: 0;
}

.job-bullets {
  margin: 22px 0 0;
  padding-left: 20px;
  display: grid;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 16px;
}

.job-bullets li::marker {
  color: var(--link);
}

.job-stack {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 734px) {
  .job-body {
    padding: 22px 20px 26px;
  }

  .job-chrome-dates {
    display: none;
  }
}
</style>
