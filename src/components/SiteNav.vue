<script setup>
import { profile } from '../data/resume.js'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav class="nav">
    <div class="nav-inner">
      <a class="nav-brand" href="#top">{{ profile.name }}</a>
      <div class="nav-links">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--nav-bg);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--hairline);
}

.nav-inner {
  max-width: var(--content-width);
  margin: 0 auto;
  height: 48px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  font-size: 13px;
  letter-spacing: -0.01em;
  color: var(--text-secondary);
  transition: color 0.2s var(--ease-out);
}

.nav-brand:hover,
.nav-links a:hover {
  color: var(--text);
  text-decoration: none;
}

@media (max-width: 734px) {
  .nav-links {
    gap: 18px;
  }

  .nav-links a:nth-child(3) {
    display: none;
  }
}
</style>
