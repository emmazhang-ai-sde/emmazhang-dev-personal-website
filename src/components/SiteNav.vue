<script setup>
import { profile } from '../data/resume.js'

const props = defineProps({ libraryOpen: Boolean })
const emit = defineEmits(['open-library', 'navigate'])

// While the library "page" is showing, anchors can't scroll the locked page —
// hand the target to the parent, which closes the library first.
function go(event, href) {
  if (props.libraryOpen) {
    event.preventDefault()
    emit('navigate', href)
  }
}

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav class="nav">
    <a class="nav-brand" href="#top" @click="go($event, '#top')">{{ profile.name }}</a>
    <div class="nav-links">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        @click="go($event, link.href)"
      >{{ link.label }}</a>
    </div>
    <button
      class="nav-cta"
      :class="{ 'nav-cta--active': libraryOpen }"
      @click="emit('open-library')"
    >My AI Library</button>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 40;
  width: min(800px, calc(100% - 32px));
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

/* jobright-style pill CTA at the right end of the bar */
.nav-cta {
  flex-shrink: 0;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  padding: 9px 18px;
  color: var(--bg);
  background: var(--text);
  border: none;
  border-radius: var(--r-pill);
  cursor: pointer;
  transition:
    transform 0.2s var(--ease-out),
    box-shadow 0.2s var(--ease-out);
}

.nav-cta:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-lift);
}

.nav-cta--active {
  background: var(--brand);
  color: #000;
}

@media (max-width: 734px) {
  .nav {
    height: 52px;
    padding-left: 18px;
  }

  .nav-links {
    gap: 14px;
  }

  /* small screens keep Experience + Projects + the library pill */
  .nav-links a:nth-child(3),
  .nav-links a:nth-child(4),
  .nav-links a:nth-child(5) {
    display: none;
  }

  .nav-cta {
    font-size: 12px;
    padding: 8px 14px;
  }
}
</style>
