<script setup>
import { profile } from '../data/resume.js'
</script>

<template>
  <section id="contact" class="section">
    <div class="section-inner">
      <div class="contact-block" v-reveal>
        <h2 class="contact-title">Let's build something.</h2>
        <p class="contact-subtitle">
          Open to software engineering internships and new grad roles.
        </p>
        <div class="contact-actions">
          <a class="btn-ink" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </div>
        <div class="contact-links">
          <a
            v-for="link in profile.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener"
          >
            {{ link.label }} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-block {
  background: var(--brand);
  border: 1px solid #000;
  border-radius: var(--r-block);
  padding: 96px 48px;
  text-align: center;
  color: #000;
}

.contact-title {
  font-size: clamp(36px, 6vw, 60px);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.contact-subtitle {
  font-size: 19px;
  margin-top: 14px;
  color: rgba(0, 0, 0, 0.65);
}

.contact-actions {
  margin-top: 36px;
}

.contact-block .btn-ink {
  background: #000;
  color: #fff;
}

.contact-links {
  margin-top: 26px;
  display: flex;
  justify-content: center;
  gap: 28px;
}

.contact-links a {
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

@media (max-width: 734px) {
  .contact-block {
    padding: 64px 24px;
  }
}
</style>
