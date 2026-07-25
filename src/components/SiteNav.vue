<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
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
  { label: 'Professional Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

// Scroll spy: whichever section crosses the upper third of the viewport is the
// one you're "in". Cheaper and steadier than an observer per section, since a
// tall section can span the whole viewport with no intersection change.
const activeId = ref('')
let sections = []
let ticking = false

function update() {
  ticking = false
  const line = window.innerHeight * 0.3
  let current = ''
  for (const el of sections) {
    const { top, bottom } = el.getBoundingClientRect()
    if (top <= line && bottom > line) {
      current = el.id
      break
    }
  }
  activeId.value = current
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(update)
}

onMounted(() => {
  sections = links.map((l) => document.querySelector(l.href)).filter(Boolean)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  update()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <nav class="nav">
    <a class="nav-brand" href="#top" @click="go($event, '#top')">{{ profile.name }}</a>
    <div class="nav-links">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        :class="{ 'is-active': activeId === link.href.slice(1) }"
        :aria-current="activeId === link.href.slice(1) ? 'true' : undefined"
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
  width: min(880px, calc(100% - 32px));
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
  gap: 4px;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--text-secondary);
  padding: 7px 12px;
  border-radius: var(--r-pill);
  white-space: nowrap;
  transition:
    color 0.2s var(--ease-out),
    background-color 0.25s var(--ease-out),
    box-shadow 0.25s var(--ease-out);
}

/* the section you're currently scrolled into */
.nav-links a.is-active {
  color: var(--text);
  font-weight: 600;
  background: var(--tint-brand);
  box-shadow:
    0 2px 10px 0 rgba(0, 240, 160, 0.3),
    0 0 0 1px rgba(0, 240, 160, 0.35);
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
