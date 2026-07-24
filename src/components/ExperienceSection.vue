<script setup>
import { experience } from '../data/resume.js'

const dateParts = (dates) => dates.split(' – ')

// duration in calendar months, so the axis span can scale with real time
const MONTH_INDEX = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Sept: 8, Oct: 9, Nov: 10, Dec: 11,
}

const toMonthCount = (point) => {
  const t = point.trim()
  if (t === 'Present') {
    const now = new Date()
    return now.getFullYear() * 12 + now.getMonth()
  }
  const [month, year] = t.split(' ')
  return Number(year) * 12 + (MONTH_INDEX[month] ?? 0)
}

const spanMonths = (dates) => {
  const parts = dateParts(dates)
  if (parts.length < 2) return 1
  return Math.min(12, Math.max(1, toMonthCount(parts[1]) - toMonthCount(parts[0])))
}
</script>

<template>
  <section id="experience" class="section section--alt">
    <div class="section-inner">
      <h2 class="section-title" v-reveal>Things I've built for real business.</h2>

      <div class="timeline">
        <div
          v-for="(job, i) in experience"
          :key="job.company + job.dates"
          class="timeline-item"
          :style="{ '--months': spanMonths(job.dates) }"
          v-reveal="{ delay: i * 80 }"
        >
          <!-- duration on the axis: end node (top) → mint span → start node (bottom);
               the page runs newest-first, so time decreases downward -->
          <span class="timeline-node timeline-node--end" aria-hidden="true" />
          <p class="timeline-date timeline-date--end">
            {{ dateParts(job.dates)[1] || dateParts(job.dates)[0] }}
          </p>
          <template v-if="dateParts(job.dates)[1]">
            <span class="timeline-span" aria-hidden="true" />
            <span class="timeline-node timeline-node--start" aria-hidden="true" />
            <p class="timeline-date timeline-date--start">{{ dateParts(job.dates)[0] }}</p>
          </template>

          <article class="job-card">
            <!-- browser-chrome header, jobright style -->
            <div class="job-chrome">
              <span class="dot" /><span class="dot" /><span class="dot" />
              <span class="job-chrome-title">{{ job.company }}</span>
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
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Timeline rail: date gutter on the far left, rail column at x≈148px,
   card to the right. Each job is a *span* on the axis — end node (top)
   + solid mint duration bar + start node (bottom) — with a thin grey
   connector through the gap between jobs. Newest first, so time
   decreases downward. */
.timeline-item {
  --mpx: 56px; /* axis scale: pixels per month */
  position: relative;
  padding-left: 176px;
  padding-bottom: 40px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

/* connector: from this job's start node down to the next job's end
   node — i.e. the time on the axis when nothing was happening */
.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 147px;
  top: calc(58px + var(--months) * var(--mpx));
  bottom: 2px;
  width: 2px;
  border-radius: 1px;
  background: var(--grey-line);
}

.timeline-node {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid var(--ink-border);
}

.timeline-node--end {
  left: 140px;
  top: 8px;
  width: 13px;
  height: 13px;
  background: var(--brand);
  box-shadow: 0 0 0 4px var(--tint-brand);
}

.timeline-node--start {
  left: 142.5px;
  top: calc(40px + var(--months) * var(--mpx));
  width: 8px;
  height: 8px;
  background: var(--card-bg);
  box-shadow: 0 0 0 3px var(--tint-brand);
}

/* the duration bar: scaled to real time via --mpx (px per month) */
.timeline-span {
  position: absolute;
  left: 145.5px;
  top: 32px;
  height: calc(var(--months) * var(--mpx));
  width: 5px;
  border-radius: 3px;
  background: var(--brand);
  border: 1px solid var(--ink-border);
}

.timeline-date {
  position: absolute;
  left: 0;
  width: 122px;
  margin: 0;
  text-align: right;
  white-space: nowrap;
}

.timeline-date--end {
  top: 5px;
  font-size: 15px;
  font-weight: 700;
  color: var(--text-soft);
  letter-spacing: -0.01em;
}

.timeline-date--start {
  top: calc(35px + var(--months) * var(--mpx));
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
}

.job-card {
  background: var(--card-bg);
  border: 1px solid var(--ink-border);
  border-radius: var(--r-card);
  box-shadow: var(--shadow-card);
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
  .timeline-item {
    --mpx: 44px;
    padding-left: 30px;
    padding-bottom: 28px;
  }

  .timeline-item:not(:last-child)::after {
    left: 4px;
    top: calc(46px + var(--months) * var(--mpx));
    bottom: 2px;
    height: auto;
  }

  .timeline-node--end {
    left: 0;
    top: 3px;
    width: 11px;
    height: 11px;
    box-shadow: 0 0 0 3px var(--tint-brand);
  }

  .timeline-node--start {
    left: 3px;
    top: calc(30px + var(--months) * var(--mpx));
    width: 6px;
    height: 6px;
  }

  .timeline-span {
    left: 4px;
    top: 24px;
    height: calc(var(--months) * var(--mpx));
    width: 4px;
  }

  .timeline-date--end {
    position: static;
    width: auto;
    text-align: left;
    font-size: 14px;
    margin-bottom: 12px;
  }

  .timeline-date--start {
    left: 18px;
    top: calc(26px + var(--months) * var(--mpx));
    width: auto;
    text-align: left;
    font-size: 12px;
  }

  .job-body {
    padding: 22px 20px 26px;
  }
}
</style>
