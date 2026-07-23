<script setup>
import { profile } from '../data/resume.js'
</script>

<template>
  <section id="contact" class="section contact">
    <div class="section-inner">
      <h2 class="contact-title" v-reveal>Let's build something.</h2>
      <p class="contact-subtitle" v-reveal="{ delay: 100 }">
        Open to software engineering internships and new grad roles.
      </p>
      <div class="contact-actions" v-reveal="{ delay: 200 }">
        <a class="btn-primary" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </div>
      <div class="contact-links" v-reveal="{ delay: 300 }">
        <a v-for="link in profile.links" :key="link.label" :href="link.url" target="_blank" rel="noopener">
          {{ link.label }} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  text-align: center;
  padding-top: 140px;
  padding-bottom: 140px;
}

.contact-title {
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 700;
  letter-spacing: -0.02em;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.contact-subtitle {
  font-size: 21px;
  color: var(--text-secondary);
  margin-top: 16px;
}

.contact-actions {
  margin-top: 36px;
}

.btn-primary {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  font-size: 17px;
  padding: 12px 28px;
  border-radius: 980px;
  transition: background 0.2s var(--ease-out);
}

.btn-primary:hover {
  background: var(--accent-hover);
  text-decoration: none;
}

.contact-links {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 28px;
}

.contact-links a {
  font-size: 17px;
}
</style>
