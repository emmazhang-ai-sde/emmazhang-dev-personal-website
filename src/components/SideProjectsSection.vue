<script setup>
import { sideProjects } from '../data/resume.js'
</script>

<template>
  <section id="projects" class="section">
    <div class="section-inner">
      <h2 class="section-title" v-reveal>Things I build after hours.</h2>

      <div class="project-grid">
        <component
          :is="project.links.length ? 'a' : 'article'"
          v-for="(project, i) in sideProjects"
          :key="project.name"
          class="project-card"
          :class="{ 'project-card--linked': project.links.length }"
          :href="project.links[0]?.url"
          :target="project.links.length ? '_blank' : undefined"
          :rel="project.links.length ? 'noopener' : undefined"
          v-reveal="{ delay: i * 80 }"
        >
          <div class="project-header">
            <h3 class="project-name">
              {{ project.name }}
              <span v-if="project.links.length" class="project-link-arrow" aria-hidden="true">↗</span>
            </h3>
            <span class="chip chip--mint project-status">{{ project.status }}</span>
          </div>
          <p class="project-descriptor">
            {{ project.descriptor }} · {{ project.dates }}
            <span v-if="project.stars != null" class="repo-stats">
              <span class="repo-stat" title="GitHub stars">
                <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                  <path fill="currentColor" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                </svg>
                {{ project.stars }}
              </span>
              <span class="repo-stat" title="GitHub forks">
                <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                  <path fill="currentColor" d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                </svg>
                {{ project.forks }}
              </span>
            </span>
          </p>

          <p class="project-description">{{ project.description }}</p>

          <div class="project-stack">
            <span v-for="tech in project.stack" :key="tech" class="chip chip--mint">{{ tech }}</span>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  border: 1px solid var(--ink-border);
  border-radius: var(--r-card);
  box-shadow: var(--shadow-card);
  padding: 28px 32px 30px;
  color: inherit;
  text-decoration: none;
  transition:
    transform 0.25s var(--ease-out),
    box-shadow 0.25s var(--ease-out),
    border-color 0.25s var(--ease-out);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lift);
}

/* Linked cards signal "clickable" with a mint accent bar that slides
   in on the left edge, plus a border/text tint — the card stays on
   its normal light/dark ground, unlike the plain lift used on
   non-clickable cards (e.g. experience). */
.project-card--linked {
  cursor: pointer;
}

.project-card--linked::before {
  content: '';
  position: absolute;
  left: 0;
  top: 20px;
  bottom: 20px;
  width: 4px;
  border-radius: 0 3px 3px 0;
  background: var(--link);
  transform: scaleY(0);
  transform-origin: center;
  transition: transform 0.25s var(--ease-out);
}

.project-card--linked:hover {
  border-color: var(--link);
}

.project-card--linked:hover::before {
  transform: scaleY(1);
}

.project-card--linked:hover .project-name,
.project-card--linked:hover .project-link-arrow {
  color: var(--link);
}

.project-link-arrow {
  display: inline-block;
  color: var(--link);
  font-weight: 600;
  transition: transform 0.2s var(--ease-out);
}

.project-card--linked:hover .project-link-arrow {
  transform: translate(2px, -2px);
}

.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.project-name {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: color 0.25s var(--ease-out);
}

.project-status {
  flex-shrink: 0;
}

.project-descriptor {
  margin-top: 4px;
  font-size: 14px;
  color: var(--text-tertiary);
}

.repo-stats {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-left: 10px;
}

.repo-stat {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
}

.repo-stat svg {
  flex-shrink: 0;
}

.project-description {
  margin-top: 18px;
  font-size: 16px;
  color: var(--text-secondary);
  flex-grow: 1;
}

.project-stack {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 734px) {
  .project-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .project-card {
    padding: 22px 20px 24px;
  }
}
</style>
