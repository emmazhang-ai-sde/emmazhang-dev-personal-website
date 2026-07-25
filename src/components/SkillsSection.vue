<script setup>
import { computed } from 'vue'
import { skills } from '../data/resume.js'

// Flatten every row into lines of chips carrying a running index, so the
// entrance cascade runs continuously down the whole panel rather than
// restarting per row. Delay is capped so the tail doesn't drag.
const STEP = 22
const MAX_DELAY = 900

const rows = computed(() => {
  let n = 0
  return skills.map((group) => ({
    category: group.category,
    lines: (group.groups ?? [{ items: group.items }]).map((line) => ({
      items: line.items.map((label) => ({
        label,
        delay: `${Math.min(n++ * STEP, MAX_DELAY)}ms`,
      })),
    })),
  }))
})
</script>

<template>
  <section id="skills" class="section">
    <div class="section-inner">
      <h2 class="section-title" v-reveal>The toolbox.</h2>

      <div class="skills-panel" v-reveal>
        <div v-for="row in rows" :key="row.category" class="skill-row">
          <h3 class="skill-category">{{ row.category }}</h3>

          <!-- a row is one line of chips, or several -->
          <div class="skill-lines">
            <div v-for="(line, i) in row.lines" :key="i" class="skill-items">
              <span
                v-for="chip in line.items"
                :key="chip.label"
                class="skill-chip"
                :style="{ transitionDelay: chip.delay }"
                >{{ chip.label }}</span
              >
            </div>
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

/* rows broken into separate lines of chips */
.skill-lines {
  display: grid;
  gap: 10px;
}

/* inverted chips — soft-ink fill, ground-coloured text, so they read as solid
   tokens rather than outlines; flips automatically in dark mode. No hover
   state: they are labels, not controls. */
.skill-chip {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--bg);
  background: var(--chip-ink);
  border-radius: var(--r-pill);
  padding: 9px 17px;

  /* entrance cascade: each chip carries its own delay, released when the
     panel scrolls into view (v-reveal adds .is-visible) */
  opacity: 0;
  transform: translateY(10px) scale(0.96);
  transition:
    opacity 0.45s var(--ease-out),
    transform 0.45s var(--ease-out);
}

.skills-panel.is-visible .skill-chip {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .skill-chip {
    opacity: 1;
    transform: none;
    transition: none;
    transition-delay: 0ms !important;
  }
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
