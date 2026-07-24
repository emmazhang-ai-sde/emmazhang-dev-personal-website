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
    <a class="nav-brand" href="#top">{{ profile.name }}</a>
    <div class="nav-links">
      <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: min(720px, calc(100% - 32px));
  height: 56px;
  padding: 0 10px 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: var(--nav-bg);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border-radius: var(--r-nav);
  box-shadow: var(--shadow-nav);
}

.nav-brand {
  font-size: 17px;
  font-weight: 700;
  color: var(--text);
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
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
  .nav {
    height: 52px;
    padding-left: 18px;
  }

  .nav-links {
    gap: 14px;
  }

  /* small screens keep Experience + Skills + Contact */
  .nav-links a:nth-child(3) {
    display: none;
  }
}
</style>
