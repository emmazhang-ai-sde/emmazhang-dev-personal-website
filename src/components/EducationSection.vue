<script setup>
import { education } from '../data/resume.js'
</script>

<template>
  <section id="education" class="section">
    <div class="section-inner">
      <h2 class="section-title" v-reveal>Education.</h2>

      <div class="edu-head" v-reveal>
        <div>
          <h3 class="edu-school">{{ education.school }}</h3>
          <p class="edu-degree">{{ education.degree }}</p>
        </div>
        <p class="edu-meta">
          <span class="chip chip--mint">GPA {{ education.gpa }}</span>
          <small>{{ education.location }}</small>
        </p>
      </div>

      <div class="edu-cols">
        <div
          v-for="(group, i) in education.coursework"
          :key="group.category"
          class="edu-col"
          :class="[`edu-col--${group.accent}`, group.lead && 'edu-col--lead']"
          v-reveal="{ delay: i * 90 }"
        >
          <h4 class="edu-col-head">{{ group.category }}</h4>
          <ul class="edu-list">
            <li v-for="course in group.items" :key="course">{{ course }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
}

.edu-school {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.015em;
}

.edu-degree {
  font-size: 16px;
  color: var(--text-secondary);
  margin-top: 5px;
}

.edu-meta {
  text-align: right;
  flex-shrink: 0;
}

.edu-meta small {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-tertiary);
  margin-top: 9px;
}

.edu-cols {
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(20px, 4vw, 44px);
  align-items: start;
}

/* Each column carries its own accent, set from resume.js. --accent is the
   label ink (contrast-safe in both schemes); --accent-line is the rule. */
/* 'ink' is the quiet option: no accent hue, so a column marked with it sits
   behind whichever column carries the brand colour. */
.edu-col--ink {
  --accent: var(--text-secondary);
  --accent-line: var(--grey-line);
  --accent-tint: var(--bg-alt);
}

.edu-col--purple {
  --accent: var(--chip-purple);
  --accent-line: var(--chip-purple);
  --accent-tint: var(--tint-purple);
}

.edu-col--mint {
  --accent: var(--brand-deep);
  --accent-line: var(--brand-deep);
  --accent-tint: var(--tint-brand);
  /* the mint column lifts into a green glow rather than the neutral shadow */
  --accent-lift:
    0 14px 36px 0 rgba(0, 240, 160, 0.3),
    0 2px 10px 0 rgba(0, 240, 160, 0.16);
}

.edu-col--blue {
  --accent: var(--chip-blue);
  --accent-line: var(--chip-blue);
  --accent-tint: var(--tint-blue);
}

.edu-col--amber {
  --accent: var(--chip-amber);
  --accent-line: var(--chip-amber);
  --accent-tint: var(--tint-amber);
}

.edu-col-head {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--accent, var(--text-tertiary));
  padding-bottom: 12px;
  border-bottom: 2px solid var(--accent-line, var(--brand));
}


.edu-list {
  list-style: none;
  padding: 0;
}

.edu-list li {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-secondary);
  padding: 12px 0;
  border-bottom: 1px solid var(--grey-line);
}

/* Borderless panels — the edge is carried by the shadow alone, which deepens
   on hover. The lead column earns its focus from ink and accent. */
.edu-col {
  background: var(--card-bg);
  border-radius: var(--r-card);
  box-shadow: var(--shadow-card);
  padding: 24px 28px 8px;
  transition: box-shadow 0.25s var(--ease-out);
}

.edu-col:hover {
  box-shadow: var(--accent-lift, var(--shadow-lift));
}

@media (prefers-color-scheme: dark) {
  .edu-col--mint {
    --accent-lift:
      0 14px 36px 0 rgba(0, 240, 160, 0.22),
      0 2px 10px 0 rgba(0, 240, 160, 0.12);
  }
}

.edu-col--lead .edu-list li {
  color: var(--text);
}

.edu-list li:last-child {
  border-bottom: none;
}

@media (max-width: 734px) {
  .edu-cols {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .edu-col {
    padding: 20px 20px 6px;
  }

  .edu-meta {
    text-align: left;
  }
}
</style>
