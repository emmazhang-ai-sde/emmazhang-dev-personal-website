<script setup>
import { computed } from 'vue'
import { profile } from '../data/resume.js'

// The role marked `primary` becomes the headline; the rest trail beneath it.
const primaryRole = computed(() => profile.roles.find((r) => r.primary) ?? profile.roles[0])
const otherRoles = computed(() => profile.roles.filter((r) => r !== primaryRole.value))
</script>

<template>
  <header id="top" class="hero">
    <div class="hero-inner">
      <p class="hero-greeting" v-reveal>{{ profile.greeting }}</p>
      <h1 class="hero-name" v-reveal="{ delay: 100 }">
        <span class="hero-highlight">{{ profile.name }}</span>
      </h1>
      <p class="hero-tagline" v-reveal="{ delay: 220 }">{{ profile.tagline }}</p>

      <p class="hero-role" v-reveal="{ delay: 300 }">
        <span class="hero-role-mark">{{ primaryRole.label }}</span>
      </p>
      <p class="hero-role-also" v-reveal="{ delay: 340 }">
        <template v-for="(role, i) in otherRoles" :key="role.label">
          <span v-if="i" class="hero-role-sep" aria-hidden="true">·</span>{{ role.label }}
        </template>
      </p>

      <p class="hero-subtitle" v-reveal="{ delay: 380 }">{{ profile.subtitle }}</p>
      <div class="hero-actions" v-reveal="{ delay: 420 }">
        <a class="btn-ink" :href="`mailto:${profile.email}`">Get in touch</a>
        <a v-if="profile.resumeUrl" class="btn-mint" :href="profile.resumeUrl">Download résumé</a>
        <a v-else class="btn-mint" href="#experience">See my work</a>
      </div>
    </div>

    <!-- jobright homage: the match-score card, floating over the hero -->
    <aside class="match-card" aria-hidden="true">
      <svg class="match-ring" viewBox="0 0 56 56" width="56" height="56">
        <circle cx="28" cy="28" r="24" fill="none" stroke="var(--grey-line)" stroke-width="5" />
        <circle
          cx="28"
          cy="28"
          r="24"
          fill="none"
          stroke="var(--brand)"
          stroke-width="5"
          stroke-linecap="round"
          stroke-dasharray="150.8"
          stroke-dashoffset="3"
          transform="rotate(-90 28 28)"
        />
        <text x="28" y="33" text-anchor="middle" class="match-score">98%</text>
      </svg>
      <div>
        <p class="match-role">AI Engineer</p>
        <p class="match-label">Strong match</p>
      </div>
    </aside>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  background: var(--hero-ground);
  border-radius: 0 0 var(--scoop) 0;
  min-height: 92svh;
  display: flex;
  align-items: center;
  padding: 160px 22px 96px;
}

.hero-inner {
  max-width: var(--content-width);
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

.hero-greeting {
  font-size: clamp(21px, 3vw, 28px);
  font-weight: 600;
  color: var(--text-secondary);
}

.hero-name {
  font-size: clamp(52px, 10vw, 104px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-top: 8px;
}

.hero-highlight {
  background: var(--grad-mint);
  border-radius: 20px;
  padding: 0 0.22em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.hero-tagline {
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.15;
  margin-top: 24px;
}

/* Target roles. The primary one is display type wearing the mint mark — the
   same highlight as the name — so it is unmissable; the other two follow as
   one supporting line, large enough to read as real titles rather than fine
   print, but held below the tagline so the hierarchy stays intact. */
.hero-role {
  font-size: clamp(34px, 5.6vw, 60px);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.04;
  margin-top: 22px;
}

.hero-role-mark {
  background: var(--grad-mint);
  border-radius: 16px;
  padding: 0 0.18em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.hero-role-also {
  font-size: clamp(17px, 2.1vw, 22px);
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--text-soft);
  margin-top: 18px;
}

.hero-role-sep {
  color: var(--text-tertiary);
  margin: 0 10px;
}

.hero-subtitle {
  font-size: clamp(17px, 2.2vw, 21px);
  line-height: 1.5;
  color: var(--text-secondary);
  max-width: var(--narrow-width);
  margin: 20px auto 0;
}

.hero-actions {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* floating match card */
.match-card {
  position: absolute;
  right: max(4%, calc((100% - 1280px) / 2));
  top: 24%;
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--card-bg);
  border: 1px solid var(--ink-border);
  border-radius: var(--r-card);
  box-shadow: var(--shadow-card);
  padding: 16px 20px;
  transform: rotate(4deg);
  animation: bob 6s ease-in-out infinite alternate;
}

.match-score {
  font-size: 13px;
  font-weight: 700;
  fill: var(--text);
  font-family: var(--font-sans);
}

.match-role {
  font-size: 15px;
  font-weight: 600;
}

.match-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--link);
  margin-top: 2px;
}

@keyframes bob {
  from {
    transform: rotate(4deg) translateY(0);
  }
  to {
    transform: rotate(4deg) translateY(-14px);
  }
}

@media (max-width: 1067px) {
  .match-card {
    display: none;
  }
}

@media (max-width: 734px) {
  .hero-role-also {
    line-height: 1.35;
  }

  .hero-role-sep {
    margin: 0 6px;
  }

  .hero {
    border-radius: 0 0 64px 0;
    padding-top: 120px;
    min-height: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .match-card {
    animation: none;
  }
}
</style>
