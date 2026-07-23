<script setup>
import { profile } from '../data/resume.js'
</script>

<template>
  <header id="top" class="hero">
    <div class="hero-inner">
      <p class="hero-greeting" v-reveal>{{ profile.greeting }}</p>
      <h1 class="hero-name" v-reveal="{ delay: 100 }">{{ profile.name }}.</h1>
      <p class="hero-tagline" v-reveal="{ delay: 220 }">{{ profile.tagline }}</p>
      <p class="hero-subtitle" v-reveal="{ delay: 320 }">{{ profile.subtitle }}</p>
      <div class="hero-actions" v-reveal="{ delay: 420 }">
        <a class="btn-primary" :href="`mailto:${profile.email}`">Get in touch</a>
        <a v-if="profile.resumeUrl" class="btn-link" :href="profile.resumeUrl">
          Download résumé <span aria-hidden="true">›</span>
        </a>
        <a v-else class="btn-link" href="#experience">
          See my work <span aria-hidden="true">›</span>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  min-height: calc(100svh - 48px);
  display: flex;
  align-items: center;
  padding: 80px 22px;
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
  font-size: clamp(56px, 11vw, 112px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
  background: var(--gradient);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: gradient-drift 8s ease-in-out infinite alternate;
}

@keyframes gradient-drift {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 100% 50%;
  }
}

.hero-tagline {
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.15;
  margin-top: 20px;
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
  gap: 28px;
  flex-wrap: wrap;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  font-size: 17px;
  padding: 12px 24px;
  border-radius: 980px;
  transition: background 0.2s var(--ease-out);
}

.btn-primary:hover {
  background: var(--accent-hover);
  text-decoration: none;
}

.btn-link {
  font-size: 17px;
}

@media (prefers-reduced-motion: reduce) {
  .hero-name {
    animation: none;
  }
}
</style>
